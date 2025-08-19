// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword,
     getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjsSmtnWXDgPd4Iw9Y9HFQXxGVOOvpfGI",
  authDomain: "netflix-clone-a291b.firebaseapp.com",
  projectId: "netflix-clone-a291b",
  storageBucket: "netflix-clone-a291b.firebasestorage.app",
  messagingSenderId: "487444307259",
  appId: "1:487444307259:web:f581f1e21fbba1cc2b2b1e",
  measurementId: "G-8JC8Y4CDJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {

    try {
        const res =await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
        
    }


}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));

    }
}

const logout = async () => {
    await signOut(auth);
    
}

export { auth, db, login, signup, logout };

