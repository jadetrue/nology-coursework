var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccount.firebase.js");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
