// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: 'AIzaSyASkYBkuCO_rHe1ymDFE8RzDoe6CtF1SeQ',
  authDomain: 'platzi-store-a1076.firebaseapp.com',
  databaseURL: 'https://platzi-store-a1076.firebaseio.com',
  projectId: 'platzi-store-a1076',
  storageBucket: 'platzi-store-a1076.appspot.com',
  messagingSenderId: '1056517396911',
  appId: '1:1056517396911:web:8194e56181c79b9493375a',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();