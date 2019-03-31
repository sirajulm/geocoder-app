This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

Demo project to demonstrate implementation of adding markers on a map

### Frontend

Written in `React/Redux/Saga` enables a user to add, edit or delete any number of markers on the map.
It request the user for a friendly `title` for the place and the `address` of the place and send it to the backend to retrieve the geocode and add it to the map.

### Backend

Written in `ExpressJS`, exposes API's to create/edit, delete and query markers.
Uses Firebase for storage. Geocoding API is written as a provider. It makes adding different, geocoding API easy and with no change to existing code. Developer can configure which provider to use, which then switches to the new provider.

## Available Scripts (Frontend)

In the `client` directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

## Available Scripts (Backend)

In the `server` directory, you can run:

### `npm start`

Runs the server in  `http://localhost:7000`, by default


## Issues

Below are the list of issues existing in the app

### Marker ID generation (Backend)

Currently, the backend is using the `place_id`, for convinence, returned by the geocoder API to persist the marker to DB. Which is not appropriate for a real world project. 

### Overlapping Markers (Backend)

Due to the above issue, if a  place `A` is added and stored with `place_id` value `place_a`, later the address is modified to `B` with `place_id` `place_b`, since it is an update the lat/long values are saved directly against `place_a`. This mismatch can be avoided with an id generator.

With the above scenario, there is a minor issue, where adding place `A`, and updating it to `B`, and then adding a new place `B` will have 2 markers getting overlapped.

### Delete confirmation (Frontend)

Not implemented

### Unit Test

Not written for some components and redux

### Integration Test

Not Written
