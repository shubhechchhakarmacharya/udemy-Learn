//DOM for manipulations the content style and add functions to the webpage.

//Making selection of elements.
const div = document.querySelector(".parent");
div.classList.remove('parent');
Array.from(div.children).forEach(child=> {
    child.classList.add('select-children');
});
console.log(div.children);
console.log(div.nextElementSibling);  

// Use Events 

const btn = document.querySelector(".btn")
btn.addEventListener("click", e =>{
    alert("This button is been clicked.")
})

const ul = document.querySelector(".ul")

const list = document.querySelectorAll('li');
list.forEach((tag)=>{
    tag.addEventListener('click', e =>{
        e.target.style.color = 'purple';
        // e,stopPropogation()  for avoiding event bubbling (firing both child and parent eventlisteners)
    });
});

const button = document.querySelector(".add");
button.addEventListener('click', ()=>{
    const li = document.createElement("li");
    const p = document.createElement('p')
    // p.textContent = "Prepended"  //Added from top
    li.textContent = "Appended" //Added from bottom
    ul.append(li);
    ul.prepend(p);
})

ul.addEventListener('click',e =>{
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})

const box = document.querySelector(".box");
box.addEventListener("mousemove",(e) =>{
    box.innerHTML = `Position of X is ${e.offsetX} <br/> Position of Y is ${e.offsetY}`
})

document.addEventListener('wheel', (e) =>{
    console.log(e.pageX,e.pageY)
})

const boxP = document.querySelectorAll('.boxP');
boxP.forEach((P)=>{
    P.addEventListener("copy",(e) =>{
        alert("You cannot copy this.")
    })
})

//Popup event

const pop = document.querySelector('#btn');
const popup = document.querySelector('.popup')
pop.addEventListener('click',()=>{
    popup.style.display ='block';
});

const close = document.querySelector('.cross');
close.addEventListener('click',()=>{
    popup.style.display = 'none';
});
popup.addEventListener('click', () =>{
    popup.style.display = 'none';
});