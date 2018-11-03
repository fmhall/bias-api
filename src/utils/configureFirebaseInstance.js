import * as firebase from 'firebase'

// Configure your firebase singleton instance
console.log("hello");

const firebaseInstance = firebase.initializeApp({
  apiKey: "AIzaSyARisDaUpCv3QpAlve0arKpU69d1a0SSy4",
  authDomain: "bias-checker.firebaseapp.com",
  databaseURL: "https://bias-checker.firebaseio.com",
  storageBucket: "bias-checker.appspot.com",
})

/**
 * @desc Upserts some data to a Firebase real-time databaase
 */
export const writeDataToFirebase = (articleId, data) => 
  firebase
    .database()
    .ref(`/articles/${articleId}`)
    .update(data)