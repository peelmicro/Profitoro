// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyCeuM2bC33Eziuvmr3mjT7IJxCckCVUR_U',
  databaseURL: 'https://profitoro-4fe6a.firebaseio.com',
  authDomain: 'profitoro-4fe6a.firebaseapp.com',
  storageBucket: 'profitoro-4fe6a.appspot.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
