import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const intilizeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default intilizeFirebase;
