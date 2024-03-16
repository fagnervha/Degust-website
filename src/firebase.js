import { initializeApp, getApps, getApp } from 'firebase/app'
import {
    getMessaging,
    getToken,
    onMessage,
    isSupported,
} from 'firebase/messaging'
import { useStoreFcm } from './hooks/react-query/push-notification/usePushNotification'

const firebaseConfig = {
    apiKey: "AIzaSyCrBgSgph-x9N1f7ALrS4r21L91UXMFFcE",
    authDomain: "degustdelivery2024.firebaseapp.com",
    projectId: "degustdelivery2024",
    storageBucket: "degustdelivery2024.appspot.com",
    messagingSenderId: "225091958378",
    appId: "1:225091958378:web:215a83168977d2486fbc13",
    measurementId: "G-1W2SD2QE1Q",
}
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const messaging = (async () => {
    try {
        const isSupportedBrowser = await isSupported()
        if (isSupportedBrowser) {
            return getMessaging(firebaseApp)
        }

        return null
    } catch (err) {
        return null
    }
})()

export const fetchToken = async (setTokenFound, setFcmToken) => {
    return getToken(await messaging, {
        vapidKey:
            'BPeARH6hmM8eYwcK1HuZ2wkRU2DcnjqWpfyjDKrIT9nIm1GQ1PP6nruSKhGkwpFMjJK8ERZFSueyzmvTaaMskNY',
    })
        .then((currentToken) => {
            if (currentToken) {
                setTokenFound(true)
                setFcmToken(currentToken)

                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
            } else {
                setTokenFound(false)
                setFcmToken()
                // shows on the UI that permission is required
            }
        })
        .catch((err) => {
            console.error(err)
            // catch error while creating client token
        })
}

export const onMessageListener = async () =>
    new Promise((resolve) =>
        (async () => {
            const messagingResolve = await messaging
            onMessage(messagingResolve, (payload) => {
                resolve(payload)
            })
        })()
    )