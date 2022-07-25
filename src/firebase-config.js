//  const config = {
    //   };

/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
    /* ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
   
    import firebase from "firebase/compat/app";
    import {getFirestore} from "@firebase/firestore";
    import "firebase/firestore";
    import { initializeApp } from "firebase/app";



    const FirebaseConfig = {
        apiKey:
        process.env["REACT_APP_FIREBASE_API_KEY"] 
        // "AIzaSyDKiK1RT_wtgZ3KxsSJ4gIhdp-1Ehgubn0"
        ,
        authDomain:
        process.env["REACT_APP_FIREBASE_AUTH_DOMAIN"] 
        // "readwriteauth.firebaseapp.com"
        ,
        projectId:
        process.env["REACT_APP_FIREBASE_PROJECT_ID"] 
        // "readwriteauth"
        ,
        storageBucket:
        process.env["REACT_APP_FIREBASE_STORAGE_BUCKET"] 
        // "readwriteauth.appspot.com"
        ,
        messagingSenderId: 
        process.env["REACT_APP_FIREBASE_MESSAGING_SENDER_ID"] 
        // "908967641479"
        ,
        appId:
         process.env["REACT_APP_FIREBASE_APP_ID"] 
        // "1:908967641479:web:b9901ff852c15ee3df1322"
      };
    //   console.log('trap firebase');
    //   firebase.initializeApp(FirebaseConfig);
    //   let db = firebase.database();
        // or
        const app = initializeApp(FirebaseConfig);
        export const db = getFirestore(app);
      // Add form handlers

        var taskTxt = document.getElementById("taskTxt");
        var day = document.getElementById("day");
        var reminder = document.getElementById("reminder");
        var hiddenId = document.getElementById("hiddenId");

        // taskTxt.addEventListener('submit', (e)=>{
        //     e.preventDefault();

        //     let id = hiddenId.value || Date.now() //if there is no value for hiddenId replace id value with date

        //     db.ref('tasks/' + id).set({
        //         taskTxt: taskTxt.value,
        //         day: day.value,
        //         reminder: reminder.value,
        //     });

        //     taskTxt.value = '';
        //     day.value = '';
        //     reminder.value = '';
        // });




  export function getFirebaseConfig() {
    if (!FirebaseConfig || !FirebaseConfig.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return FirebaseConfig;
    }
  }

//   export default firebase;
