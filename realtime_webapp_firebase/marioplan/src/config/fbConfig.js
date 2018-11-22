import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyATfn08NN3ENF_Hp_dnYuCmRrLN39FLmRQ",
  authDomain: "webapp-d102a.firebaseapp.com",
  databaseURL: "https://webapp-d102a.firebaseio.com",
  projectId: "webapp-d102a",
  storageBucket: "",
  messagingSenderId: "382859127251"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 