import * as firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
// // child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })

// database.ref('expenses').push({
//   description: 'New Car',
//   note: 'I prefer a New Truck',
//   amount: 37400,
//   createdAt: moment().format("MMM Do YY")
// })

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'Renting a House',
//   amount: 45461,
//   createdAt: 34564
// })

// database.ref('expenses').push({
//   description: 'Taxes',
//   note: 'Land Tax',
//   amount: 2354234,
//   createdAt: 10
// })
// database.ref('notes').push({
//   title: 'React Topics',
//   body: 'Coding is fun'
// })

//database.ref('notes/-M4HIIEh_Oo6PtBEvbb6').remove()

// database.ref('notes').push({
//   title: 'React Topics',
//   body: 'Coding is fun'
// })

//const firebaseNotes = {
//   notes: {
//     idfasfsa: {
//       title: 'Top Fucker',
//       body: 'This is my note'
//     },
//     fewroij3452: {
//       title: 'Fucker',
//       body: 'This is my note'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'Top Fucker',
//   body: 'This is my note'
// }, {
//     id: '412',
//     title: 'Hell Naw',
//     body: 'This is my note'
// }]

// database.ref('notes').set(notes)

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (e) => {
//   console.log('Error fetching data', e)
// })

// setTimeout(() => {
//   database.ref('name').set('Dawud El-Bey Muhammad')
//   database.ref('job/title').set('Dev Ops Engineer')
// }, 5000)

// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 10000)

// setTimeout(() => {
//   database.ref('name').set('Dawud Muhammad')
//   database.ref('job/title').set('Engineer')
// }, 5000)

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data fo ya suh', e)
//   })
