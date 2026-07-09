// Firebase initialization for the portfolio site.
// This is the public web config for project "portfolio-site-2ed0e"
// (same values Firebase Hosting exposes at /__/firebase/init.json).
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBk_UNC4G5HFKx4Ovlk6agLfiUbgqqyR6w',
  authDomain: 'portfolio-site-2ed0e.firebaseapp.com',
  projectId: 'portfolio-site-2ed0e',
  storageBucket: 'portfolio-site-2ed0e.firebasestorage.app',
  messagingSenderId: '884666251256',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
