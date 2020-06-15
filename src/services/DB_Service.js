import firebase from 'firebase/app';
import 'firebase/database';
import store from '../store'

let firebaseConfig = {
    apiKey: 'AIzaSyD8wT_k21ntY2NtXUZraK2CFB-9bCn9apI',
    authDomain: 'simple-radio-x.firebaseapp.com',
    databaseURL: 'https://simple-radio-x.firebaseio.com',
    projectId: 'simple-radio-x',
    storageBucket: 'simple-radio-x.appspot.com',
    messagingSenderId: '293263881523',
    appId: '1:293263881523:web:c0df952704719039afba46',
    measurementId: 'G-3M25MXLZF1',
}

let app = firebase.initializeApp(firebaseConfig)
let db = app.database()

export class DB_Service {
    addStation(data) {
        let id = store.state.stationsModule.stations.length
        db.ref('stations/' + id).set(data)
    }
}
