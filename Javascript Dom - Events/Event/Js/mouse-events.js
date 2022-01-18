const btn = document.querySelector('.btn');
const p = document.querySelector('p');

// btn.addEventListener('click', MouseEvents);
btn.addEventListener('mouseup', MouseEvents);
btn.addEventListener('mousedown', MouseEvents);

p.addEventListener('mouseenter', MouseEvents);
p.addEventListener('mouseleave', MouseEvents);





btn.addEventListener('mousemove', MouseEvents);


function MouseEvents(event) {
    console.log(`Mouse Event Type: ${event.type}`);
    console.log(event);
    const h1 = document.querySelector('h1');
    h1.textContent = `X: ${event.offsetX}, Y:${event.offsetY}`;
}