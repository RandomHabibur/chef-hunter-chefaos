import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);
// create user with email and password
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // create user with email and password
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update user profile info
  const updateUserProfile = (displayName, photoURL) => {
    updateProfile(auth.currentUser, { displayName, photoURL })
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  //   observer for user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        console.log("no user");
      }
    });
    return () => {
      unsubscribe();
    };
  });

  const provider = "google.com";
  const userInfo = {
    provider,
    signupUserWithEmailAndPassword,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
