import { initializeApp, getApps, getApp } from 'firebase/app'
import {
    getMessaging,
    getToken,
    onMessage,
    isSupported,
} from 'firebase/messaging'
import { useStoreFcm } from './hooks/react-query/push-notification/usePushNotification'

const firebaseConfig = {
    apiKey: "AIzaSyC65OXItWgAtKfioVXWsGD2ReGFycUstR4",
    authDomain: "degust-delivery-1fc62.firebaseapp.com",
    projectId: "degust-delivery-1fc62",
    storageBucket: "degust-delivery-1fc62.appspot.com",
    messagingSenderId: "1087572610631",
    appId: "1:1087572610631:web:de662c3500d6cd02b42b62",
    measurementId: "G-GZHXX5WZV1",
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
            'BAuZBAvkBHpF44nnSZveCoGRQzM6sgheZlJI27GdhtPjk_G421NTwmxsfDH1b0D8eyl5tNYu3mekz3jGjfo35GQ',
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