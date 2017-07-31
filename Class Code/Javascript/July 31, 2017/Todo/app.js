var todoInput = document.getElementById('todo');
var btn = document.getElementById('btn');
var todoList = document.getElementById('todoList');
var editTodoItem;

function addTodo() {
    var todoItem = todoInput.value;

    var li = document.createElement('li');
    var todoText = document.createTextNode(todoItem);

    var delbtn = document.createElement('button');
    var delBtnText = document.createTextNode('delete');
    delbtn.appendChild(delBtnText);
    delbtn.setAttribute('onClick', 'deleteTodo(this.parentElement)')

    var edBtn = document.createElement('button');
    var edBtnText = document.createTextNode('edit');
    edBtn.appendChild(edBtnText);
    edBtn.setAttribute('onClick', 'editTodo(this.parentElement)')




    li.appendChild(todoText);
    li.appendChild(edBtn);
    li.appendChild(delbtn);


    todoList.appendChild(li);

    todoInput.value = '';
}


function deleteTodo(itemToDelete) {

    todoList.removeChild(itemToDelete);

}


function editTodo(itemToEdit) {
    editTodoItem = itemToEdit;
    btn.innerHTML = 'save';
    btn.setAttribute('onClick', 'saveTodo()');
    todoInput.value = itemToEdit.childNodes[0].nodeValue;
}

function saveTodo() {
    console.log('save');
    var editedTodo = todoInput.value;
    editTodoItem.childNodes[0].nodeValue = editedTodo;
    btn.innerHTML = 'add';
    btn.setAttribute('onClick', 'addTodo()');
    todoInput.value = '';
    editTodoItem = undefined;
}   