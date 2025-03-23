let time = document.getElementById('time');


setInterval(() => {
    time.innerHTML = `
    <h1>${new Date().toLocaleTimeString()}</h1>`;
}, 1000);


let btn = document.getElementById('btn');
let art2 = document.getElementById('art2');
let inp = document.getElementById('newtask');
let tasklist = document.getElementById('tasklist');

let x = 0;

btn.addEventListener('click', () => {
    if(inp.value == ''){
        art2.style.border = '2px solid red';
        btn.disabled = true;
        event.preventDefault();
    } else if (tasklist.children.length < 16){
        tasklist.innerHTML += `<li class="task"><button class="del">❌</button> ${inp.value} <input type="checkbox"></input></li>`;
        x += 1;
    }
});


let del = document.getElementById('del')

tasklist.addEventListener('click', (e) => {
    if(e.target.classList.contains('del')){
        e.target.parentElement.remove();
    }
});
