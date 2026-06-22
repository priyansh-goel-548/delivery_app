var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ups-clone-de1a1-default-rtdb.firebaseio.com"
});


const db = admin.database();

module.exports = db;