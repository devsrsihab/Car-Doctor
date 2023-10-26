import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // ES6
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./FirebaseAuthInfo";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // user state
  const [user, setUser] = useState("");
  // loading state
  const [loading, setLoading] = useState(true);

  // createUserWithEmailAndPassword
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and pass
  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logout
  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

  // on auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(`on State change ${createUser}`);
      setUser(currentUser);
      setLoading(false)
      console.log(currentUser);

    });

    return () => {
      unSubscribe();
    };
  }, []);

  // create user with google
  const provider = new GoogleAuthProvider();
  const signWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    createUser,
    user,
    signWithGoogle,
    loading,
    logout,
    signIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;

// 1. make a context out of function
// 2. define the content tower undeer the context like: <AuthContext.Provider> </AuthContext.Provider>
// 3. set a props value of this authcontext tower
// 4. make whole app chikl under the authcontext tower
// 5. now use children props in AuthContext Tower
