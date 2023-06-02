import firebase from "firebase";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL:
    "https://dancewithdeirdre-70da8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dancewithdeirdre-70da8",
  storageBucket: "dancewithdeirdre-70da8.appspot.com",
  messagingSenderId: "520039071482",
  appId: "1:520039071482:web:f6cd60ed25da7849e7d343",
  measurementId: "G-NWNVV9R7EN"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.database();
var storage = firebase.storage();

// collection references
const classesCollection = db.ref("classes");
const faqsCollection = db.ref("faqs");

function readCollection(collection, arr) {
  collection.on("value", function(querySnapshot) {
    querySnapshot.forEach((i) => {
      if(!i.val().cancelled){
        arr.push(i.val());
      }
    });
  });
}

function readEvents(events) {
  return readCollection(classesCollection, events);
}

function readFaqs(faqs) {
  return readCollection(faqsCollection, faqs);
}

function getImage(fileName) {
  return new Promise(function(resolve, reject) {
    var reference = storage.ref(fileName);
    if (reference != null) {
      reference.getDownloadURL().then(function(url) {
        return resolve(url);
      });
    } else return reject("");
  });
}

export { readEvents, readFaqs, getImage, storage };
