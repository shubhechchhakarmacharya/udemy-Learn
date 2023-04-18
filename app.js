//DOM for manipulations the content style and add functions to the webpage.

//Making selection of elements.
const div = document.querySelector(".parent");
div.classList.remove('parent');
Array.from(div.children).forEach(child => {
    child.classList.add('select-children');
});
console.log(div.children);
console.log(div.nextElementSibling);

// Use Events 

const btn = document.querySelector(".btn")
btn.addEventListener("click", e => {
    alert("This button is been clicked.")
})

const ul = document.querySelector(".ul")

const list = document.querySelectorAll('li');
list.forEach((tag) => {
    tag.addEventListener('click', e => {
        e.target.style.color = 'purple';
        // e,stopPropogation()  for avoiding event bubbling (firing both child and parent eventlisteners)
    });
});

const button = document.querySelector(".add");
button.addEventListener('click', () => {
    const li = document.createElement("li");
    const p = document.createElement('p')
    // p.textContent = "Prepended"  //Added from top
    li.textContent = "Appended" //Added from bottom
    ul.append(li);
    ul.prepend(p);
})

ul.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})

const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
    box.innerHTML = `Position of X is ${e.offsetX} <br/> Position of Y is ${e.offsetY}`
})

document.addEventListener('wheel', (e) => {
    console.log(e.pageX, e.pageY)
})

const boxP = document.querySelectorAll('.boxP');
boxP.forEach((P) => {
    P.addEventListener("copy", (e) => {
        alert("You cannot copy this.")
    })
})

//Popup event

const pop = document.querySelector('#btn');
const popup = document.querySelector('.popup')
pop.addEventListener('click', () => {
    popup.style.display = 'block';
});

const close = document.querySelector('.cross');
close.addEventListener('click', () => {
    popup.style.display = 'none';
});
popup.addEventListener('click', () => {
    popup.style.display = 'none';
});

//form event

const submit = document.querySelector(".signup");
const pattern = /^[a-zA-Z]{4,}$/;
const fill = document.querySelector("#fill");
let result = submit.name.value.search(pattern)
submit.addEventListener("submit", e => {
    e.preventDefault();
    if (pattern.test(submit.name.value) === true && pattern.test(submit.password.value)) {
        fill.textContent = "WOW! nice username and password."
    }
    else {
        fill.textContent = "Username and password must only contain alphabets."
    }
})

submit.name.addEventListener('keyup', e => {
    if (pattern.test(submit.name.value)) {
        submit.name.style.backgroundColor = '#5aff5a'
    }
    else {
        submit.name.style.backgroundColor = '#a60000bd'
    }
})
submit.password.addEventListener('keyup', e => {
    if (pattern.test(submit.password.value)) {
        submit.password.style.backgroundColor = '#5aff5a'
    }
    else {
        submit.password.style.backgroundColor = '#a60000bd'
    }
})

//Filter method 

const user = [
    {user : "Name1" , paid:true},
    {user : "Name2" , paid:false},
    {user : "Name3" , paid:true},
    {user : "Name4" , paid:false}
];

const filtered = user.filter(users=>users.paid);
console.log(filtered);

//Map method

const product = [
    {name : "Kajal" , price : 50},
    {name : "Lipstick" , price : 300},
    {name : "Eyeshadow" , price : 1050},
    {name : "Foundation" , price : 1200}
]

const productDetail = product.map((total)=>{
    if (total.price <= 300){
        return total.price;
    }
    else{
        return total.price*2;
    };
})

console.log(productDetail)

//Reduce method

const number = [
    {subject:"Maths" , mark: 60},
    {subject:"Maths" , mark: 70},
    {subject:"Social" , mark: 80},
    {subject:"Science" , mark: 90},
    {subject:"Maths" , mark: 98},
    {subject:"Account" , mark: 50},
    {subject:"Maths" , mark: 80}
]

const total = number.reduce((acc,curr) =>{
    if (curr.subject === "Maths"){
        return acc=+ curr.mark;
    }
    console.log(acc);
})

// sort method

const num = [
    {name:"Name" , score:70},
    {name:"Name2" , score:60},
    {name:"Name3" , score:170},
    {name:"Name4" , score:80}
]

num.sort((a,b) =>{
    return b.score - a.score;
});
console.log(num)

//Chaining the array method

const numbers = [
    {name:"Name" , score:70},
    {name:"Name2" , score:60},
    {name:"Name3" , score:170},
    {name:"Name4" , score:50}
]
const final = numbers
    .filter(fnum =>fnum.score > 60)
    .map(fnum => `The score is ${fnum.score} of ${fnum.name}.`);
console.log(final)

//Date and time
const now = new Date();
console.log(now);
console.log("Date:", now.getFullYear());

const data = (callback) =>{
    const timeStamp = 19823712467;
console.log(new Date(timeStamp));


//Async https request
const request = new XMLHttpRequest();

request.addEventListener("readystatechange" , ()=>{
    if (request.readyState ===4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
    } else if(request.readyState === 4){
        callback('could not fetch data', undefined)
    }
})
request.open("GET", "https://jsonplaceholder.typicode.com/todos/")
request.send();
};

data((err,data) =>{
console.log('callback fires')
if(err){
    console.log(err);
} else{
    console.log(data)
}
})

//Promise
const something = () =>{
    return new Promise((resolve,reject) => {
        resolve("Resolved")
        reject("Rejected")
    })
}
something().then(data =>{ 
    console.log(data)
}).catch(err =>{
    console.log(err)
})

//fetch api

fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data =>{
    console.log(data)
}).catch((err) =>{
    console.log('rejected' , err);
})

//await

const get = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    return data;
};
console.log(1)
console.log(2)
get()
.then(data => console.log('resolved:', data));
console.log(3)
console.log(4)

//local storage
localStorage.setItem("name","Someone");
localStorage.setItem("age", 20);

let names = localStorage.getItem("name");
let age = localStorage.getItem("age");
localStorage.removeItem("name")
localStorage.clear()
console.log(names, age);

//Stringify 
const listed = [
    {'name' : 'Reyman' , "age" : 20},
    {'name' : 'Rolex' , "age" : 45},
    {'name' : 'Yami' , "age" : 33},
    {'name' : 'Yenen' , "age" : 27}
]

localStorage.setItem("listed" , JSON.stringify((listed)))

let stored = localStorage.getItem('listed');
console.log(JSON.parse(stored))

//constructor and class

class Users{
    constructor(name,mail){
        this.name = name;
        this.mail = mail;
    }
}
const user1 = new Users("leon" , "leon@gmail.com")
const user2 = new Users("devis" , "devis@gmail.com")
console.log(user1 , user2)

//class methods and methods

class User {
    constructor(name, post) {
      this.name = name;
      this.post = post;
    }
    login() {
      console.log(`${this.name} logged in.`);
      return this;
    }
    logout() {
      console.log(`${this.name} logged out.`);
    }
  }
  
  class Admin extends User {
    // constructor(name, mail, title){ Super idea
    //     super(name, mail)
    //     this.title
        deleteUser(user, users) {
            users = users.filter(u => u.name !== user.name);
            return users;
          }
        }
    // }
    
  
  const userOne = new User("lea", "Developer");
  const userTwo = new User("sia", "Designer");
  const userThree = new Admin("Ponia", "Admin"); //, 'Fire people');
  
  let users = [userOne, userTwo, userThree];
  users = userThree.deleteUser(userTwo, users);
  console.log(users);

//Using function is also same method to use instead of creating a class.

function Use(name, mail){
    this.name = name;
    this.mail= mail;
}
//Prototypcal inheritance
function Admn(name, mail, title){
    Use.call(this, name, mail, title);
        this.title = title;
}

const useOne = new Use("meronaam" , "Meroemail")
const useTwo = new Use("uskonaam" , "Uskoemail")
const useThree = new Use("Admin" , "Admin@mail")
console.log(useOne, useTwo, useThree);

Admn.prototype = Object.create(User.prototype);

circle = Math.PI 
console.log(circle)

const Name = {
    firstName : "Yesus",
    lastName : "Pradhan",

    set fullName(fullName){
        this.firstName = fullName.toLowerCase
    }
}
Name.firstName = "Simrik"
console.log(Name.firstName)

class Timer {
    constructor(start, stop) {
        this.start = start,
            this.stop = stop;
    }
}
  let someTime = new Timer(0, 230);
  console.log("Starting time: " + someTime.start);
  console.log("Stopping time: " + someTime.stop);
  Object.defineProperty(someTime, 'time', {
    get: function() {return (this.stop - this.start) / 60; }
  });
  console.log("Time elapsed in minutes: " + someTime.time.toPrecision(3));

  //More ES6 ES7
  //rest parameter

  const numb = (...nums) =>{
    console.log(nums.map((num, index) => index + num)    
    )
  }

  const double = numb(1,2,3,4,5,6,7,8,9)
  

  //spread syntax array
  const b = ["tem" , "tom" , "gresh"]
  const a = ["sara" , "dev" , "lara" , ...b]
  console.log(...a)

  //spread syntax object
  const obj = {
    name: "name" ,
    age: 12,
    county : "country"
  }
  const newObj = {...obj}
  console.log(newObj)

  //Set
  const wArray = ['what', 'why', 'when', 'why'];
  console.log(wArray)

  const wSet = new Set(wArray)
  console.log(wSet)

  const unique = [...wSet];
  console.log(unique)

  const ages = new Set();
  ages.add(20);
  ages.add(50);
  ages.add(25).add(30).add("Set");
  ages.delete(20)
  console.log(ages , ages.size);
  ages.clear() //to clear all values

//Symbol
const symbolOne = Symbol('Generic Name');
const symbolTwo = Symbol('Generic Name');

console.log(symbolOne , typeof symbolOne)
console.log(symbolOne === symbolTwo)

const ninja = {};

ninja.age = 30;
ninja['nam'] = 'No';
ninja['nam'] = 'Ninja';

ninja[symbolOne] = 'Wait'
ninja[symbolTwo] = 'Okay'

console.log(ninja)

