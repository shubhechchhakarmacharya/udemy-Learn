const div = document.querySelector(".clock")

const time = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const html = `
        <span> ${hour}: </span>
        <span> ${minute}: </span>
        <span> ${second}</span>
`;
div.innerHTML = html;

};
setInterval(time,1000)


