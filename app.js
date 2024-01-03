let onBtn = document.querySelector('#onBtn');
let offBtn = document.querySelector('#offBtn');
let bulb = document.querySelector('#bulb');
let message = document.querySelector('#message');

onBtn.addEventListener('click', () => {
    bulb.style.color = 'yellow';
    message.innerText = "The bulb is now switched on!"
});

offBtn.addEventListener('click', () => {
    bulb.style.color = '#000';
    message.innerText = "The bulb is now switched off!"
});