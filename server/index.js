const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const cors = require('cors');
const appConfig = require('./config')
var serviceAccount = require('./geocoderServiceAccount.json');

const app = express();
app.use(bodyParser.json());
app.use(cors());

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
var db = admin.firestore();

app.post('/markers', async (req, res) => {
    const { body: { data: { id, title, address } } } = req;
    try {
        const provider = require(`./providers/${appConfig.GEO_CODE_PROVIDER}`);
        let data = {};

        if (address) {
            const geocodeData = await provider.geocode(address);
            data = { ...geocodeData }
        }

        if (title) {
            data = { ...data, title }
        }

        if (id) {
            try {
                const doc = await db.collection(appConfig.DB_COLLECTION_NAME).doc(id).get();
                if (!doc.exists) {
                    console.log('no doc');
                    // TODO
                } else {
                    data = { ...doc.data(), ...data, id };
                }
            } catch (error) {
                throw error
            }
        } else {

        }


        if (data.id) {
            var docRef = db.collection(appConfig.DB_COLLECTION_NAME).doc(data.id);
            await docRef.set(data);
            res.status(200).send(data);
        }
    } catch (error) {
        if (error.name === 'EmptyError') {
            res.status(404).send({
                error: 'Address Not found'
            })
        } else if (error.code === 'MODULE_NOT_FOUND') {
            console.log(error);
            res.status(500).send({
                error: 'Internal Server Error'
            })
        } else {
            res.status(500).send({
                error: error.code
            })
        }
    }
})

app.get('/markers', async (req, res) => {
    const snapshot = await db.collection(appConfig.DB_COLLECTION_NAME).get()
    const data = snapshot.docs.map(doc => doc.data());
    if (data.length) {
        const newData = {};
        data.forEach((item) => {
            newData[item.id] = item
        })
        res.status(200).send(newData);
    } else {
        res.status(404).send({ error: 'No data' })
    }
})

app.delete('/markers/:id', async (req, res) => {
    const { params } = req;
    try {
        var docRef = db.collection(appConfig.DB_COLLECTION_NAME).doc(params.id);
        await docRef.delete();
        res.status(200).send({ id: params.id });
    } catch (error) {
        res.status(404).send({ error: 'Unable to delete. Try Again Later' })
    }
})

app.listen(appConfig.PORT, appConfig.HOST, () => { console.log(`Server running in ${appConfig.HOST}:${appConfig.PORT}`) });