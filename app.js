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
    console.log(resolve())
}).catch(err =>{
    console.log(err)
})