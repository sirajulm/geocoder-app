const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const cors = require('cors');


const PROVIDER = 'google';
var serviceAccount = require('./geocoderServiceAccount.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT | 7000;
const HOST = process.env.HOST | "0.0.0.0";
console.log("" + HOST)
app.post('/geocode', async (req, res) => {
    const { body: { data: { id, title, address } } } = req;

    try {
        const provider = require(`./providers/${PROVIDER}`);
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
                const doc = await db.collection('map-markers').doc(id).get();
                if (!doc.exists) {
                    console.log('no doc');
                    // TODO
                } else {
                    // adding id to remove generatedID
                    data = { ...doc.data(), ...data, id };
                }
            } catch (error) {
                console.log(error);
            }
        } else {

        }


        console.log(data)

        if (data.id) {
            var docRef = db.collection('map-markers').doc(data.id);
            await docRef.set(data);
            res.send(data).status(200);
        }
    } catch (exception) {
        console.log(exception)
    }
})

app.get('/markers', async (req, res) => {
    const snapshot = await db.collection('map-markers').get()
    const data = snapshot.docs.map(doc => doc.data());
    const newData = {};
    data.forEach((item) => {
        newData[item.id] = item
    })
    res.send(newData).status(200);
})

app.delete('/markers/:id', async (req, res) => {
    const { params } = req;
    var docRef = db.collection('map-markers').doc(params.id);
    await docRef.delete();
    res.send({ id: params.id }).status(200);
})

app.listen(PORT, HOST, () => { console.log(`Server running in ${HOST}:${PORT}`) });