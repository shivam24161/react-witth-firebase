import { useState } from "react";
import { auth, googleProvider } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   sign in with email and password
  const handleSignIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  //   Sign in with google
  const handleSignInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };
  //   Logout
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {!!auth.currentUser ? (
        <>
          {auth.currentUser.email}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={handleSignIn}>Sign in</button>
          <button onClick={handleSignInWithGoogle}>Sign in with google</button>
        </>
      )}
    </div>
  );
};
export default Login;
