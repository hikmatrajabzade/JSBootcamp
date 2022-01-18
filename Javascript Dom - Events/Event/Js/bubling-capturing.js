// const items = document.querySelector('.items');
const container = document.querySelectorAll('.container');
const body = document.querySelector('.body');


container.addEventListener('click', function(a) {
    if (a.target.className === 'delete') {

        a.target.parentElement.remove();

    }
})


// ** event bubling [icden cole dogru elementleri secir]
// items.addEventListener('click', function(item) {
//     console.log('items');
//     item.stopPropagation()
// })

// container.addEventListener('click', function(item) {
//     console.log('container');
//     item.stopPropagation()
// })

// body.addEventListener('click', function(item) {
//     console.log('body');
//     item.stopPropagation()
// })


// Capturing [colden ice]
// items.addEventListener('click', function(item) {
//     console.log('items');
// }, true)

// container.addEventListener('click', function(item) {
//     console.log('container');
// }, true)

// body.addEventListener('click', function(item) {
//     console.log('body');
// }, true)