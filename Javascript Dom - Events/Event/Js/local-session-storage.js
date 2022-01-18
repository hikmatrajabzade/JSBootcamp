// LOCAL STORAGE

const firstName = localStorage.setItem('firstName', 'Hikmat');
const lastName = localStorage.setItem('lastName', 'Rajabli');

// array yo local storage
let hobies = ['cinema', 'film', 'code'];
localStorage.setItem('hobies', JSON.stringify(hobies));
console.log(JSON.parse(localStorage.getItem('hobies')));

// get item
console.log(localStorage.getItem('lastName'));

//remove item
localStorage.removeItem('firstName');

//clear item
localStorage.clear();



// SESSION STORAGE




const city = sessionStorage.setItem('city', 'Baku');
const country = sessionStorage.setItem('country', 'Azerbaijan');

console.log(sessionStorage);