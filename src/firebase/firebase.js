import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD4z3Sr3kL14_F-7neah-omnBdbQ_D44d0",
    authDomain: "hellodb2002.firebaseapp.com",
    databaseURL: "https://hellodb2002.firebaseio.com",
    projectId: "hellodb2002",
    storageBucket: "hellodb2002.appspot.com",
    messagingSenderId: "618622197911",
    appId: "1:618622197911:web:a9961edff550241795c9d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDoc = collectionRef.doc();
        batch.set(newDoc, obj)



    })

    return await batch.commit()
}

export const convertCollectionsSnapShotToMap = (collections) => {
    const transofmedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transofmedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {})

}
// Create User Profile Document

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {

            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })

        } catch (e) {
            alert("Error here : " + e.message)
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth)
        }, reject)
    })
}
// Google Auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

