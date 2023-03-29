import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDiAdMhOkD-Ihyx_clQzobRfawPCnKTtCM",
  authDomain: "atmovie-307d0.firebaseapp.com",
  projectId: "atmovie-307d0",
  storageBucket: "atmovie-307d0.appspot.com",
  messagingSenderId: "568165041236",
  appId: "1:568165041236:web:abe974adc8efb9e29619c1",
  measurementId: "G-37Z18NTRQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
