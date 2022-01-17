const li = document.createElement('li');

li.className = 'list-group-item list-group-item-secondary';
li.appendChild(document.createTextNode('Todo New'));

const a = document.createElement('a');
a.className = 'delete-item float-right';
a.innerHTML = '<i class="fas fa-times"></i>';

li.appendChild(a);

document.querySelector('.list-group').appendChild(li);
const list = document.querySelector('.list-group');



for (let i = 0; i < list.children.length; i++) {
    console.log(list.children[i]);
}