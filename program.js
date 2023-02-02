// let sum = (a,b) => a + b;

// console.log("Sum is: " + sum(3, 5));
// console.log("Sum is: " + sum(4, 9));
// console.log("Sum is: " + sum(1, 10));

// let multiplication = (x, y) => x * y;
// console.log ("Myltiplication opp: " + multiplication(8, 4));

// console.log ("Myltiplication opp: " + multiplication(7, 7));
// console.log("Sum is: " + sum(9, 9));

// console.log("Sum is: " + sum(1, 11));

// console.log("Стемоусов".replace("т", "п"));


// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   //
//   function updateRecords(records, id, prop, value) {
//     if(prop != 'tracks' && value != '') {
//       records[id][prop] = value;
//     }
//     else if (value == ''){
//         delete records[id][prop];
//     }
//     else if (prop == 'tracks' && records[id][prop] == undefined){
//         records[id][prop] = [];
//         records[id][prop].push(value);
//     }
//     else if (prop == 'tracks') {
//         records[id][prop].push(value);
//     }    
//     return records;
  
//   }
//   console.log(recordCollection);


//   updateRecords(recordCollection, 2548, "tracks", "")
//   console.log(recordCollection);

//   const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];
  
//   function lookUpProfile(name, prop) {
//     // Only change code below this line
//     for(let i = 0; i < contacts.length; i++){
//        if (contacts[i].firstName != name ){
//         if(i==contacts.length-1){
//         return "No such contact";
//         }
//         continue;
//       }  
//       else if(contacts[i].firstName == name && contacts[i].hasOwnProperty(prop) == true){        
//         return contacts[i][prop];        
//       }      
//       else if   (contacts[i].firstName == name && contacts.hasOwnProperty(prop) == false)
//       {
//         return "No such property";
//       }
//     // Only change code above this line
//   }
// }

//   function lookUpProfile(name, prop) {
//     // Only change code below this line
//     for(let i = 0; i < contacts.length; i++){
//       if(contacts[i].firstName == name && contacts[i].hasOwnProperty(prop) == true){        
//         return contacts[i][prop];        
//       }      
//       else if   (contacts[i].firstName == name && contacts.hasOwnProperty(prop) == false)
//       {
//         return "No such property";
//       }
//     // Only change code above this line
//   }
//   return "No such contact";
// }
// console.log(lookUpProfile("Bob", "number"));
//   console.log(lookUpProfile("Kristian", "likes"));
//   console.log(lookUpProfile("Kristian", "liker"));


//   function randomRange(myMin, myMax) {
//     // Only change code below this line
//     return     Math.floor(Math.random()*(myMax-myMin+1))+myMin;
//     // Only change code above this line
//   }

//   console.log(parseInt("10011", 2));


//   function rangeOfNumbers(startNum, endNum) {
//     let n = endNum;
//     if(startNum==endNum){
//       return[];
//     }
//     else{
//       let recursiveArr = rangeOfNumbers(startNum, endNum-1)
//       recursiveArr.push(endNum);
//       return recursiveArr;
//     }
//   };

//   console.log(rangeOfNumbers(5, 9));


//   function checkScope() {
//     let i = 'function scope';
//     if (true) {
//       let i = 'block scope';
//       console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
//   }

//   console.log(checkScope());

//   const s = [5, 7, 2];
//   console.log(s);
//   console.log(s.unshift(s.pop()));
//   console.log(s);

//   const sum1 = (...a) => {
//     const args = [...a];
//     return args.reduce((a, b) => a + b, 0);
//   }

//   console.log(sum1(1,2,3,4))


//   const sum2 = (...args) => {
//     let args1 = [...args];
//     return args1.reduce((a, b) => a + b, 0);
//   }

//   console.log(sum2(1,2,3,4));

//   const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
  
  
// //   const {today, tomorrow} = HIGH_TEMPERATURES;

//   console.log(tomorrow);

//   const HIGH_TEMPERATURES2 = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
  
//   // Only change code below this line
    
// // const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES2;

// //=============
// console.log(highTomorrow);

// const LOCAL_FORECAST3 = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };
  
//   const {today : {low : lowToday, high: highToday }} = LOCAL_FORECAST3;

// console.log(lowToday,highToday );

// let a = 8, b = 6;
// // Only change code below this line
// [b, a] = [a, b]

// console.log(a, b);

// function removeFirstTwo(list) {

//     // Only change code below this line
//     const [a, b, ...shorterList] = list; // Change this line
//     // Only change code above this line
//     console.log(b);
//     return shorterList;
//   }
  
//   const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const sourceWithoutFirstTwo = removeFirstTwo(source);
//   console.log(sourceWithoutFirstTwo);

//   const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);
// console.log(arr);

// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };
  
//   // Only change code below this line
//   const half = (stats) => (stats.max + stats.min) / 2.0; 
//   // Only change code above this line


//   const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };
  
//   // Only change code below this line
// //   const half = (stats) => {
// //   const{max, min} = stats;

// //   const half2 = (min + max) / 2.0; 
// //   return half2;
// // }
//   // Only change code above this line



//   const half = ({min, max}) => {
     
//     const half2 = (min + max) / 2.0; 
//     return half2;
//   }

//   console.log(half(stats));


//   const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
//     // Only change code below this line
//     //const failureItems = [`'<li class="text-warning">${result.failure[0]}</li>`, `'<li class="text-warning">${result.failure[1]}</li>'`,`'<li class="text-warning">${result.failure[2]}`];
//     const failureItems = [];
//     for(let i = 0; i<result.failure.length; i++){
//          failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`);
//     }
  
//     return failureItems;
//   }
  
//   const failuresList = makeList(result.failure);
//   console.log(failuresList);

//   const createPerson = (name, age, gender) => ({
//     // Only change code below this line
//      name,age, gender
//     });
//     // Only change code above this line
// let person1 = createPerson("Zodiac Hasbro", 56, "male");
// console.log(person1.name);

// // Only change code below this line
// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//       this.gear = newGear;
//     }
//   };
//   // Only change code above this line
//   bicycle.setGear(3);
//   console.log(bicycle.gear);

//   class Vegetable{
//     constructor(name){
//         this.name = name;
//     }
//   }

//   const carrot = new Vegetable('carrot');
// console.log(carrot.name); 

// class Thermostat {
//     constructor (fTempr){
//         this.tempr = fTempr;
//     }
//     set temperature(cTempr){
//         this.tempr = cTempr*9.0/5+32;
//     }
//     get temperature(){
//         return 5/9*(this.tempr-32);
//     }
// }

// const thermos = new Thermostat(76); 
// console.log(thermos.tempr)
// thermos.temperature = 26;
// temp = thermos.temperature; 
// console.log(temp);

// const makeServerRequest = new Promise((resolve, reject) => {
//     let someBool = false;
//     if(someBool){
//         resolve("We got the data");
//     }
//     else{
//         reject("Data not received");
//     }
// })

// makeServerRequest.catch(error => {
//     console.log(error)
//   })

// makeServerRequest.then(result =>  console.log(result));

// function getNine() {
//     let x = 6;
//     let y = 3;
//     return x + y;
//   }
  
//   let result = getNine();
//   console.log(typeof(result));


//   let array = ['today', 'was', 'not', 'so', 'great'];

// array.splice(2, 2);
// console.log(array);

//   let arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(1,3) 
// // arr.slice(4,4)
// // Only change code above this line
// console.log(arr);
// console.log(newarr);


// function htmlColorNames(arr) {
//     // Only change code below this line
//     arr.splice(0, 1, "DarkSalmon", 'BlanchedAlmond');
//     // Only change code above this line
//     return arr;
//   }
  
//   console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//   function quickCheck(arr, elem) {
//     // Only change code below this line
//   return arr.indexOf(elem) != -1 ? true:false;
//     // Only change code above this line
//   }

//   console.log(quickCheck(["squash", "onions", "shallots"], "onions"));


//   function filteredArray(arr, elem) {
//     let newArr = [];
//     // Only change code below this line
//       for(let i = 0; i<arr.length; i++){
//         if(arr[i].indexOf(elem)==-1){
//           newArr.push(arr[i]);
//         }
//       }
//     // Only change code above this line
//     return newArr;
//   }
  
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//   console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

//   let myNestedArray = [
//     // Only change code below this line
//     ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//     ['loop', 'shift', 6, ['3rd level', 'deep', ['4th level', 'deeper', ['5th level', 'deepest',]]],7, 1000, 'method'],
//     ['concat', false, true, 'spread', 'array'],
//     ['mutate', 1327.98, 'splice', 'slice', 'push'],
//     ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
//     // Only change code above this line
//   ];

//   console.log(myNestedArray[1][3][0])

  const users = {
    Alan: {
      online: false,
      sex: "boy"
    },
    Jeff: {
      online: true,
      sex: "boy"
    },
    Sarah: {
      online: false,
      sex: "girl"
    }
  }
  
//   function countOnline(usersObj) {
//     // Only change code below this line
//     let onlineCount = 0;
//     for (let u in users){
//      if(usersObj[u].online == true) onlineCount++
//     }
//     // Only change code above this line
//     return onlineCount;
//   }
//   console.log(countOnline(users));

//   function countOnline(usersObj) {
//     // Only change code below this line
//     let boyCount = 0;
//     for (let u in users){
//      if(usersObj[u].sex == 'boy') boyCount++
//     }
//     // Only change code above this line
//     return boyCount;
//   }
//   console.log(countOnline(users));


  function ObjectKeys(usersObj) {
    // Only change code below this line
    console.log(Object.keys(usersObj));
    for (let u in users){
       console.log((Object.keys(usersObj[u])));
    }
    // Only change code above this line
    
  }
  console.log(ObjectKeys(users));


  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  console.log(user);
  function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));
  console.log(user);

//   function Dog() {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: () => { return `This dog has ${dog.numLegs}.`}
//   };
  
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
    return candidate.constructor == Dog? true: false;
  
  }

  function Dog(name) {
    this.name = name;
  }
  
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);