importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
)
importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
)
firebase?.initializeApp({
    apiKey: 'AIzaSyC65OXItWgAtKfioVXWsGD2ReGFycUstR4',
    authDomain: 'degust-delivery-1fc62.firebaseapp.com',
    projectId: 'degust-delivery-1fc62',
    storageBucket: 'degust-delivery-1fc62.appspot.com',
    messagingSenderId: '1087572610631',
    appId: '1:1087572610631:web:de662c3500d6cd02b42b62',
    measurementId: 'G-GZHXX5WZV1',
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
