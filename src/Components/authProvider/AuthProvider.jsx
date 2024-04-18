import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebaseConfig';

export const AuthContext = createContext(null);

//Social Auth Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);
  const [loading, setloading] = useState(true);

  console.log(loading);
  //CreateUser
  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Update User profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //Sign in User
  const signInUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Google Login
  const googleLogin = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // GitHub Login
  const githubLogin = () => {
    setloading(true);
    return signInWithPopup(auth, githubProvider);
  };
  //Twitter Login
  const twitterLogin = () => {
    setloading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  // Logout
  const logOut = () => {
    setCurrentUser(null);
    return signOut(auth);
  };

  //Observer
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
        setloading(false);
      }
    });
    return () => unsubcribe();
  }, []);

  const allValues = {
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    twitterLogin,
    logOut,
    currentUser,
    loading,
    updateUserProfile,
    setCurrentUser,
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
