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

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Available Scripts (Backend)

In the `server` directory, you can run:

### `npm start`

Runs the server in  `http://localhost:7000`, by default


## Developer Decisions


### Third Party Integration

Server is developed in such that, adding a new provider is seamless, developer only need to ensure, whichever the provider is it returns a consistent response. The server logic, along with configuration ensure proper provider will be picked up. This can help in reducing changes required to integrate new providers remove existing ones.
Any thirdparty integration failure will be handled gracefully.

### Combine Create/Edit

The Redux Action `ADD_MARKER` does the job for create and edit as well. The form is simple and making different actions would just repeat the code. The form intelligently, finds and submits only the updated fields to the backend, so as to make backend as dumb as possible.

### Marker Addition from Map

Marker addition directly from the map, is ignored, since it directly gets the lat/lng, which would not help in demonstrating the demo. Also that would require, reverse geocoding to get the details, and adding label to the location would also turn to be little indirect.


### Responsive Layout and styling

Only few components are converted to responsive layout, to demonstrate the usage of `@media` queries. Styling have been majorly handled using `styled-components`, which compared to other `css-in-js` libraries provide much cleaner and proper CSS way of doing things

### Fonts and Colors

Font used is `Open Sans` which looks neet and similar to the design. Colors are similar colors matching the design. Any design layout and sizes are chosen to make a similar layout, and also to ensure a better look and feel.

### Limit search to Germany

The search has been limited to Germany (DE), to verify for invalid addresses. Which can be configured in the backed.

### Configuration

Most values for frontend and backend are made cofigurable, especially the API keys and baseURL's and other configurable constants.
Changing a few values like `defaultCenter` for the Map would break the application, rest fails gracefully.

**Note**: Some critial configurations like API keys and `serviceAccount.json` have been committed to the project for easy access and demonstration. These should not be directly committed in a real world project, which could be compromised. These should be only delivered via environment configuration or on deployment steps. This would be revoked once the demonstration is complete.


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
