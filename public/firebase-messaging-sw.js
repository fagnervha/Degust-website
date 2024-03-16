importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
)
importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
)
firebase?.initializeApp({
    apiKey: 'AIzaSyCrBgSgph-x9N1f7ALrS4r21L91UXMFFcE',
    authDomain: 'degustdelivery2024.firebaseapp.com',
    projectId: 'degustdelivery2024',
    storageBucket: 'degustdelivery2024.appspot.com',
    messagingSenderId: '225091958378',
    appId: '1:225091958378:web:215a83168977d2486fbc13',
    measurementId: 'G-1W2SD2QE1Q',
})

// Retrieve firebase messaging
const messaging = firebase?.messaging()

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
