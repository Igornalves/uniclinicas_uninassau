```json
npm install firebase
```

```ts
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnTyw-y6wfhmUOUBwvrxp77gRvFOKc4Y4",
  authDomain: "uniclinicas-4408e.firebaseapp.com",
  projectId: "uniclinicas-4408e",
  storageBucket: "uniclinicas-4408e.firebasestorage.app",
  messagingSenderId: "859285359820",
  appId: "1:859285359820:web:a2e82db4cb96831e0fc669",
  measurementId: "G-0D1M2SH7E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```