// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// TODO: Replace with your project's config object
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Validate config
const requiredKeys = Object.keys(firebaseConfig) as (keyof typeof firebaseConfig)[];
export const missingKeys = requiredKeys.filter(key => !firebaseConfig[key]);

// Initialize Firebase (only if config is valid to prevent crashes)
let app: any;
let auth: any;
let db: any;

if (missingKeys.length === 0) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
}

export { app, auth, db };
