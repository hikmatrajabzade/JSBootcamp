const addTaskForm = document.querySelector('#addTaskForm');
const txtTaskName = document.querySelector('#txtTaskName');
const taskList = document.querySelector('#task-list');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
let items;

// Event Listeners
eventListeners();

// Load items
loadItems();

// Load items Func
function loadItems() {
    items = getLS();
    items.forEach(function(item) {
        createItem(item);
    })
}

// Get Local Storage 
function getLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

// Set Local Storage
function setLS(text) {
    items = getLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}


// Event Listeners Func
function eventListeners() {
    addTaskForm.addEventListener('submit', addNewItem);
    taskList.addEventListener('click', deleteItem);
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

// create items
function createItem(text) {

    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.textContent = `${text}`;

    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);
}

// add new item
function addNewItem(event) {

    event.preventDefault()
    if (txtTaskName.value === '') {
        alert('add new item');
    } else {

        createItem(txtTaskName.value);
        setLS(txtTaskName.value);
        txtTaskName.value = '';

    }


}

// delete in item 
function deleteItem(event) {
    event.preventDefault();
    if (event.target.className === 'fas fa-times') {
        if (confirm('are you sure?')) {
            (event.target.parentElement.parentElement.remove());
        }
    }
}

// delete all items
function deleteAllItems(event) {
    event.preventDefault();
    if (confirm('are you sure?')) {
        taskList.childNodes.forEach(function(item) {
            if (item.nodeType === 1) {
                item.remove()
            }
        })
    }

}