import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6DJMutu9Oq6_ABCzxAFpPMpsy3HH-034",
  authDomain: "krushiapp-3dafa.firebaseapp.com",
  projectId: "krushiapp-3dafa",
  storageBucket: "krushiapp-3dafa.appspot.com",
  messagingSenderId: "668044361890",
  appId: "1:668044361890:web:04ca4a6b24dcf4248917fb",
  measurementId: "G-C0746X1XKS",
};

function listAll(folder) {
  const storageRef = firebase.storage().ref();
  // [START storage_list_all]
  // Create a reference under which you want to list
  var listRef = storageRef.child(folder);

  // Find all the prefixes and items.
  listRef
    .listAll()
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {});
        // All the items under listRef.
      });
    })
    .catch((error) => {
      console.log(error);
      // Uh-oh, an error occurred!
    });
  // [END storage_list_all]
}

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const storage = firebase.storage();
const auth = getAuth(app);

export const db = getFirestore(app);

export { storage, auth, listAll, firebase as default };
