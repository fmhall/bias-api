import * as firebase from 'firebase'

// Configure your firebase singleton instance
console.log("hello");

firebase.initializeApp({
  apiKey: "AIzaSyARisDaUpCv3QpAlve0arKpU69d1a0SSy4",
  authDomain: "bias-checker.firebaseapp.com",
  databaseURL: "https://bias-checker.firebaseio.com",
  storageBucket: "bias-checker.appspot.com",
})

export var database = firebase.database();

/**
 * @desc Upserts some data to a Firebase real-time databaase
 */

export const writeDataToFirebase = (articleId, data) => 
  firebase
    .database()
    .ref(`/articles/${articleId}`)
    .update(data)

  export const readDataToFirebase = (articleId, data) => 
  firebase
    .database()
    .ref(`/articles/${articleId}`)
    .update(data)
  
  // var biasScoreRef = firebase.database().ref('articles/' + articleId + '/starCount');
  // biasScoreRef.on('value', function(snapshot) {
  //   updateBiasCount(postElement, snapshot.val());
  // })
  ;