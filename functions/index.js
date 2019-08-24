const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send(`${request.method}: Hello from Firebase!`);
});