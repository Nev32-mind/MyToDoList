let form = document.getElementById('form');
let input = document.getElementById('input');
let button = document.getElementById('button');
let list = document.getElementById('list');
let main = document.getElementById('main');
button.addEventListener('click', function() {
    let newTask = input.value
    if (newTask == '') {
        alert('Введите задчу');
        // return;
    }
    else {
        addTask(newTask);
    input.value = '';
}});
function addTask(task) {
const listItem = document.createElement('li');
const taskText = document.createElement('span');
const delTask = document.createElement('button');
const readyTask = document.createElement('button');
taskText.classList.add('div'); 
delTask.classList.add('delButton'); 
readyTask.classList.add('readyButton'); 
listItem.classList.add('taskFrame');
taskText.textContent = task;
delTask.textContent = 'X';
readyTask.textContent = 'Ready';
listItem.appendChild(taskText);
list.appendChild(listItem);
listItem.appendChild(delTask);
listItem.appendChild(readyTask);

// Удаление задач
delTask.addEventListener('click', function() {
    list.removeChild(listItem)
});

readyTask.addEventListener('click', function() {
    listItem.classList.add('didTask');
    saveTask()
})

saveTask()
}

function saveTask() {
    let ToDoList = []
    document.querySelectorAll('li').forEach(task =>{
        taskText = task.querySelector('span').textContent 
        const isCompleted = task.classList.contains('completed');
        ToDoList.push({ text: taskText, completed: isCompleted });
    })
    localStorage.setItem('ToDoList', JSON.stringify(ToDoList));
}
document.addEventListener('DOMContentLoaded', function() {
    const savedTasks = JSON.parse(localStorage.getItem('ToDoList')) || [];
    savedTasks.forEach(task => {
        addTask(task.text);
    });
  });