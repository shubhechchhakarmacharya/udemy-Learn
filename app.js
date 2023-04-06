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
    tag.style.cursor = 'pointer'
    tag.addEventListener('click', e =>{
        e.target.style.color = 'purple';
    });
});

const button = document.querySelector(".add");
button.addEventListener('click', ()=>{
    const li = document.createElement("li");
    const p = document.createElement('p')
    p.textContent = "Prepended"
    li.textContent = "Appended"
    ul.append(li);
    ul.prepend(p);
})

const items = document.querySelectorAll(".li");
items.forEach(item =>{
    item.addEventListener('click', e => {
        e.target.remove()
    });
});