import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import "../firebase";

const provider = new GoogleAuthProvider();

const auth = getAuth();

export default function useGoogleAuth() {
  const getUser = () => {
    return auth.currentUser;
  };
  const signInWithGoogle = async () => {
    return signInWithPopup(auth, provider)
      .then(() => {
        auth.setPersistence(browserSessionPersistence);
      })
      .catch(console.warn);
  };

  const signOutWithGoogle = () => {
    signOut(auth).catch(console.warn);
  };

  const onUserStateChange = (callback: (user: User | null) => void) => {
    onAuthStateChanged(auth, (user) => callback(user));
  };

  return { signInWithGoogle, signOutWithGoogle, getUser, onUserStateChange };
}
