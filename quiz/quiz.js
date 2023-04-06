const submit = document.querySelector(".quizForm");
const result = document.querySelector(".result");
const correct = ['d', 'd', 'c', 'd', 'c']

submit.addEventListener('submit', e => {
    e.preventDefault();
    const answer = [submit.q1.value, submit.q2.value, submit.q3.value, submit.q4.value, submit.q5.value]
    let points = 0;
    answer.forEach((right, index) => {
        if (right === correct[index]) {
            points += 20;
        }
    });
    
    scrollTo(0,0);
    let output = 0;
    const timer = setInterval(()=>{
        result.textContent = `You are ${output}% monkey.`
        if(output === points){
            clearInterval(timer);
        }
        else{
            output++;
        }
    },20)
})
