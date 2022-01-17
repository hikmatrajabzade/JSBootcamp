let list = document.querySelector('.list-group');

// ** removing element 
// list.remove();
// list.children[0].remove();
// list.removeChild(list.children[0]); [yuxaridakiyla eyni]

// for (let i = 0; i < list.children.length; i++) { [for ile element silme]
//     list.children[i].children[0].remove();

// }

// ** rmeoving attribute 

// for (let i = 0; i < list.children.length; i++) {
//     list.children[i].removeAttribute('class'); [for ile atribut silme]

// }

// ** replacing elements

// const salam = document.querySelector('.salam');


// const h1 = document.createElement('h1');
// h1.setAttribute('class', 'h1');
// h1.appendChild(document.createTextNode('Salam'));



// const body = document.querySelector('body');


// ** classes 
// body.replaceChild(h1, salam);

list.children[1].classList.add("new");

console.log(list.children[1].className);
console.log(list.children[1].classList);