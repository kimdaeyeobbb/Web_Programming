// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

/* 중요한 정보이므로 .env에서 해당 정보를 숨겨주기 */
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

/* 파이어베이스 초기화 과정 - 사용할 수 있게 준비 */
const app = initializeApp(firebaseConfig);

/* firestore 초기화 */
const appFireStore = getFirestore(app)  // 초기화한 파이어베이스 객체 전달

/* firestore 인증 초기화 */
const appAuth = getAuth();

export { appFireStore, appAuth }