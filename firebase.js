import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyArlenrzt0ZInqV1D0KUHtMOvLZ1uF-Q0k",
  authDomain: "crud-a0f64.firebaseapp.com",
  databaseURL: "https://crud-a0f64.firebaseio.com",
  projectId: "crud-a0f64",
  storageBucket: "crud-a0f64.appspot.com",
  messagingSenderId: "666300074926",
  appId: "1:666300074926:web:3fabb48bc7be11b0add63f"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();