const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask(e) {
  e.preventDefault();

  const newTask = taskInput.value;
  if (newTask === '') {
    alert('Please first enter a task which you think to add!');
  }
  //Create list task
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newTask));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
  taskList.appendChild(li);

  taskInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

taskForm.addEventListener('submit', addTask);
