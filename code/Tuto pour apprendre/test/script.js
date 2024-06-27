// // buffer array

// let buffer = new ArrayBuffer(16)

// let dv1 = new DataView(buffer)

// let dv2 = new DataView(buffer,10,3)

// dv1.setInt8(11,42)

// let num = dv2.getInt8(1)

// console.log(num)
// console.log(dv1);
//-----------------------------------------------------------------------------

// let arr, arr2 = Array

// arr2 = ['CD','FD']
// arr = [5,2,3,5,4,7,8,5,4,7,8,5,4,7,2,1,3,6]
// // let truc = undefined
// let mySet = new Set(arr)

// console.log(mySet);

// function canVote(age) {
//     return age >= 15;
// }

// function func() {
//     let filtered = [24, 33, 16, 40].filter(canVote);
//     console.log(filtered);
// }
// func();

// arr.forEach(element => {
//     if (element === 5) {
//       console.log(element);
//     }
//   });
//----------------------------------------------------------------------------------------


// const animaux = new Map()

// animaux.set("chien", "ouaf")
// animaux.set("chat","miaou")



// for (const[key, value] of animaux){
//     console.log(key,value)
// }
// let events = new Set();
// let event1 = { type: "concert", day: "Saturday" };
// let event2 = { type: "book launch", day: "Wednesday"};
// let event3 = { type: "conference", day: "Thursday"};
// let event4 = { type: "meet up", day: "Monday" };
// // Let's add each event to the set
// events.add(event1);
// events.add(event2);
// events.add(event3);
// events.add(event4);
// for (let item of events.values()) {
//     console.log(item);
//   }

  
// console.log(events.has(event2));
// events.delete(event3);
// for (let value of events) {
//         console.log(value)
// }

// let cities = new Set();

// let city1 = { name: "London" };
// let city2 = { name: "Barcelona"};
// let city3 = { name: "Milan"};

// cities.add(city1);
// cities.add(city2);
// cities.add(city1);
// cities.add(city3);

// cities.forEach((city, cities) => {
//   console.log(city);
// });

// let set = new Set([9, 15, "a string", {"objectKey": "objectValue"}]);
// set.add(true);

// let arr = [...set]; // destructuring

// console.log(arr); 

// // Outputs [9, 15, "a string", {objectKey: "objectValue"}, true]

// let arr2 = [9, 15, "a string", {"objectKey": "objectValue"}];
// arr2.push(true,9)
// console.log(arr2);
// let arr2converted = [...new Set(arr2)];

// console.log(arr2converted);

// // Outputs [9, 15, "a string", {objectKey: "objectValue"}, true]


// pour enlever les duplicatats

// Method 1

// let users = ["John", "Murray", "Jane", "Jane", "Anne"];

// function unique(users) {
//         return Array.from(new Set(users));
// }

// console.log(unique(users));

// // Method 2

// let set = new Set(users);
// let arrFromSet = [...set];

// console.log(arrFromSet);


// pour voir qui est le plus rapide 

// let arr = [], set = new Set();
// let users = ["John", "Murray", "Jane", "Jane", "Anne", "John", "Murray", "Jane", "Jane", "Anne"];

// for (let i = 0; i < users.length; i++) {
//   arr.push(users[i]);
//   set.add(users[i]);
// }

// let result;

// console.time('Array'); 
// result = arr.indexOf("Anne") !== -1; 
// console.timeEnd('Array');

// console.time('Set'); 
// result = set.has("Anne"); 
// console.timeEnd('Set');

//-------------------------------------------

// let users = [{
//     id: 1,
//     name: 'John'
//   },
//   {
//     id: 2,
//     name: 'Murray'
//   },
//   {
//     id: 3,
//     name: 'Jane'
//   },
//   {
//     id: 4,
//     name: 'Jane'
//   },
//   {
//     id: 5,
//     name: 'Anne'
//   }
// ]

// let userNames = users.map(function(user) {
//   console.log(user.name)
// });

// // sans les key j'aurais du créer un array vide
// let userNms = [];

// users.forEach(function (user) {
//   userNms.push(user.name);
// });

// console.log(userNms);

// const user1 = new Map();
// user1.set('id', 1);
// user1.set('name', 'John');

// console.log(user1.get('id'));
// console.log(user1.get('name'))

// let iterateur = user1.entries()
// console.log(iterateur.next().value);
// console.log(iterateur.next().value);
// console.log(iterateur.next().value);

// let userIDs = new Map();

// let user1 = {name: 'John'}, user2 = {name: 'Murray'}, user3 = {name: 'Jane'};

// userIDs.set(user1, 1) .set(user2, 2) .set(user3, 3);

// // Method 1

// for (let [name, id] of userIDs) {
//   console.log(name);
//   console.log(id);
// }

// // Method 2

// userIDs.forEach((name, id) => {
//   console.log(name);
//   console.log(id);
// });

// const obj = {
//     'name': "John",
//     'id': 1,
//   }
  
//   const map = new Map(Object.entries(obj));
  
//   console.log(map.get('name')) 
//   // Outputs John

// let obj = {}, map = new Map();

// let users = ["John", "Murray", "Jane", "Jane", "Anne", "John", "Murray", "Jane", "Jane", "Anne"];

// for (let i = 0; i < users.length; i++) {
//   obj[i] = i;
//   map.set(i, i);
// }

// let result;

// console.time('Object'); 
// result = obj.hasOwnProperty("Anne"); 
// console.timeEnd('Object');

// console.time('Map'); 
// result = map.has("Anne"); 
// console.timeEnd('Map');

// // la map est plus rapide que de transformer les objet en map 

// function haha(...theArgs){
//     for (args of theArgs){
//         console.log(args)
//     }
// }

// haha(1,2,3,6,)

// function pow(x, n) {
//     // ? fait office de if : fait office de size.x
//     return (n == 1) ? x : (x * pow(x, n - 1));
//   }

//   console.log(pow(3,2));
// linked list
// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

//   console.log(list);

// function sumTo(n) {
//     if(n==1){
//         return 1
//     }else{
//         return n + sumTo(n-1)
//     }
// }
// function sumTo(n) {
//     return n * (n + 1) / 2;
//   }

// alert(sumTo(10))

function facto(n){
    return (n!=1) ? n * facto(n-1) : 1
}

