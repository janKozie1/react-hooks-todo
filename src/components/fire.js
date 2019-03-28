import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB_KugUNGcr4bzBSJO3sowy-17K799phZM",
    authDomain: "react-hooks-todo-a9f16.firebaseapp.com",
    databaseURL: "https://react-hooks-todo-a9f16.firebaseio.com",
    projectId: "react-hooks-todo-a9f16",
    storageBucket: "react-hooks-todo-a9f16.appspot.com",
    messagingSenderId: "322452840931"
  };
  let fire = firebase.initializeApp(config);
  export default fire;