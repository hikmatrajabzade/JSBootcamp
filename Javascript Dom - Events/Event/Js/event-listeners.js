const btn = document.querySelector('.btn');

btn.addEventListener('click', btnClick);


function btnClick(item) {
    console.log('clicked!');
    item.preventDefault(); // sehife yenilendikte scroll oldugu yerde qalir
}