console.log("dom file")

const body = document.querySelector("body");

export const style = ( ) =>{
    body.style.background = 'peachpuff';
};

const addTitle = (text) =>{
    const title = document.createElement('h1');
    title.textContent = text;
    body.append(title);
};

style();
addTitle('Hello Peachpuff peoples this is a dom file.')