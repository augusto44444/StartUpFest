import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBk7RJxxoCOAepScjmZM773gSxXO8douMw",
    authDomain: "startupfest-cd094.firebaseapp.com",
    databaseURL: "https://startupfest-cd094.firebaseio.com",
    projectId: "startupfest-cd094",
    storageBucket: "startupfest-cd094.appspot.com",
    messagingSenderId: "391418972168",
    appId: "1:391418972168:web:390d6d2ede349be9bfe9bd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;