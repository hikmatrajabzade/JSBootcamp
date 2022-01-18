const input = document.querySelector('input');

// input.addEventListener('keydown', eventHandler);
// input.addEventListener('keyup', eventHandler);
input.addEventListener('focus', eventHandler);
input.addEventListener('blur', eventHandler);
input.addEventListener('copy', eventHandler);
input.addEventListener('cut', eventHandler);
input.addEventListener('paste', eventHandler);





function eventHandler(event) {
    console.log(`event type: ${event.type}`);
    // console.log(`event keyCode: ${event.keyCode}`);
    // console.log(`event value: ${event.target.value}`);
    // event.target.style.backgroundColor = 'red';

}