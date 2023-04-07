const add = document.querySelector(".add");
const addNew = document.querySelector(".todos");
const search = document.querySelector(".search input");
const added = (todo) =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
          </li>
    `
    addNew.innerHTML += html;
}

//adding new todos
add.addEventListener('submit' , e =>{
    e.preventDefault();
    const todo = add.add.value.trim();
    if (todo.length >1){
        added(todo);
        add.reset();
    }
})
//Deleting selected todos
addNew.addEventListener('click', e =>{
    e.preventDefault();
    if(e.target.tagName === "I"){
        e.target.parentElement.remove();
    }
})
//Search todos
const content = (value) =>{
    // console.log(value)
    Array.from(addNew.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(value))
    .forEach((todo) => todo.classList.add("hide"));

    Array.from(addNew.children)
    .filter((todo)=> todo.textContent.toLowerCase().includes(value))
    .forEach((todo) => todo.classList.remove("hide"));

}


search.addEventListener('keyup',() =>{
    const value = search.value.trim().toLowerCase();
    content(value);
})