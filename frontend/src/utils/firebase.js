import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-exam-notes-generator.firebaseapp.com",
  projectId: "ai-exam-notes-generator",
  storageBucket: "ai-exam-notes-generator.firebasestorage.app",
  messagingSenderId: "147743014136",
  appId: "1:147743014136:web:1b01942b6e25eb37df4f0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default app;
