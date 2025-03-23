const pass = document.getElementById('password');
const pass1 = document.getElementById('password1');
const btn = document.getElementById('btn');
const name = document.getElementById('name');
const email = document.getElementById('email');


btn.addEventListener('click', () => {
    if (pass.value != pass1.value || pass.value.length < 8 || pass1.value.length < 8) {
        btn.disabled = true;
        pass.style.border = '2px solid red';
        pass1.style.border = '2px solid red';
        event.preventDefault();
    } else if (name.value == '' || email.value == '') {
        btn.disabled = true;
        name.style.border = '2px solid red';
        email.style.border = '2px solid red';
        event.preventDefault
    } else{
        event.preventDefault();
        btn.disabled = false;
        name.style.border = '2px solid green';
        email.style.border = '2px solid green';
        pass.style.border = '2px solid green';
        pass1.style.border = '2px solid green';
        setTimeout(() => {
            window.location.href = 'main.html';
        }, 2000);
    }
});