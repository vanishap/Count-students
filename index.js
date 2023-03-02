const incrementBtn = document.getElementById('increment-btn');
const countEl = document.getElementById('count-el');

const textEl = document.getElementById('text-el');

let count = 0;

incrementBtn.addEventListener('click', ()=>{
    countEl.textContent = ++count;
});

function save(){
    textEl.textContent = `The number of students who attended Math class is ${count}. `;
    countEl.textContent = 0;
    count= 0;
}