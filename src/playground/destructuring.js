//
// Object Destructuring
//

// const person = {
//   name: 'David',
//   age: 50,
//   location: {
//     city: 'Detroit',
//     temp: 17
//   }
// }

// const {name: firstName = 'Anonymous', age} = person;
// const name = person.name
// const age = person.age

// console.log(`${firstName} is ${age}`)


// const {city, temp: temperature} = person.location
// if (city && temperature) {  
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'The Isis Papers',
//   author: 'Dr. Frances Cress Welsing',
//   publisher: {
     //name: 'Big Black Books'
//   }
// }

// const {name: publisherName = 'Anonymous'} = book.publisher
// const {author} = book

// console.log(`${publisherName} published the Isis papers, the author is ${author}`)

//
// Array Destructuring
//

const address = ['18093 Parkside st', 'Detroit', 'Michigan', '19943']

const [, city, state = 'New York'] = address
console.log(`You are in ${state}`)

const item = ['Coffee (Super Hot)', '$2.00', '$200.50', '3.75']
const [coffee, , medium] = item
console.log(`A medium ${coffee} costs ${medium} `)

