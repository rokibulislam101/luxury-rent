// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0wcCNlKtGqLFArW0qf1zgs8ZByDuJ4xU',
  authDomain: 'assignment-nine-d2138.firebaseapp.com',
  projectId: 'assignment-nine-d2138',
  storageBucket: 'assignment-nine-d2138.appspot.com',
  messagingSenderId: '66378216041',
  appId: '1:66378216041:web:9c53e3406710507b6828f8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
