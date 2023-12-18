/*Documentation(used chatGPT to help write):
The Firebase configuration file establishes the connection between a web application and the Firebase services. 
It utilizes the Firebase SDK to initialize the app, authentication, and real-time database services. 
The firebaseConfig object contains essential parameters such as API key, authentication domain, project ID, and database URL, necessary for secure and authenticated interactions with the Firebase backend. 
The initializeApp function initializes the Firebase app with the provided configuration, while getAuth and getDatabase retrieve instances of the Authentication and Realtime Database services, respectively. 
Developers can seamlessly integrate these initialized services into their React components or modules to enable authentication and real-time data storage and retrieval within the application. 
Ensure to replace the placeholder values in the firebaseConfig object with the corresponding values from your Firebase project.
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSRgKf95i8A7xcCiBS_8k35RPuJLhgEs8",
    authDomain: "cisc2-7ec71.firebaseapp.com",
    projectId: "cisc2-7ec71",
    storageBucket: "cisc2-7ec71.appspot.com",
    messagingSenderId: "1027003655179",
    appId: "1:1027003655179:web:47cfa65529f7aaaa2e530e",
    measurementId: "G-97F55P83F1",
    databaseURL: "https://cisc2-7ec71-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app, firebaseConfig.databaseURL);
