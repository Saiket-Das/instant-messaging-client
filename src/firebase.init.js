import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC1zrSm08S-kedjiyq4G2QWcrB38Po1SVY",
    authDomain: "instant-messaging-65f6b.firebaseapp.com",
    projectId: "instant-messaging-65f6b",
    storageBucket: "instant-messaging-65f6b.appspot.com",
    messagingSenderId: "25501703387",
    appId: "1:25501703387:web:fc10db695ffc6446b440fe"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;