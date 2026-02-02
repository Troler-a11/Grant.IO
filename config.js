// Налаштування Firebase (візьми в консолі Firebase)
const firebaseConfig = {
    apiKey: "ТВІЙ_API_KEY",
    authDomain: "PROJECT.firebaseapp.com",
    projectId: "PROJECT-ID",
    storageBucket: "PROJECT.appspot.com",
    messagingSenderId: "ID",
    appId: "APP-ID"
};

const CONFIG = {
    monoToken: "UDK0o0FIo2-05Cgu5FsYC17_zZU-HITq9VwoWdbReSno",
    adminEmail: "ilemberk3356@gmail.com",
    myCard: "4874070058384718",
    fee: 0.11
};

// Ініціалізація
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
