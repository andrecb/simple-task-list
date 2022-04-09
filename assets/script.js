const tasksButton = document.querySelector('.tasks__new-button');
const tasksInput = document.querySelector('.tasks__new');
const tasksListUI = document.querySelector('.tasks__list');
const tasksEmpty = document.querySelector('.tasks__empty');

let tasksList = [];

// An event that will handle the function to create 
// a new task after the button have clicked.
tasksButton.addEventListener('click', () => {
  if (tasksInput.value !== '') {
    handleNewTask(tasksInput.value);
  } 

  if (tasksList.length === 0) {
    handleEmpty(true);
  } else {
    handleEmpty(false);
  }

  tasksInput.value = '';

  // const tasksItems = document.querySelectorAll('.tasks__item');
  // handleItemClick(tasksItems);

})

const handleNewTask = (taskValue) => {
  let count = tasksList.length + 1;

  tasksList = [...tasksList, {id: count, name: taskValue}];

  let newItem = document.createElement('li');
  let itemText = document.createTextNode(taskValue);
  newItem.appendChild(itemText);
  newItem.classList.add('tasks__item');

  newItem.addEventListener('click', () => {
    handleCompleteTask(newItem);
    console.log(newItem);
  })

  tasksListUI.appendChild(newItem);

  console.log(tasksList);
}

const handleEmpty = (value) => {
  if (value) {
    tasksListUI.style.display = 'none';
    tasksEmpty.style.display = 'block';
  } else {
    tasksListUI.style.display = 'block';
    tasksEmpty.style.display = 'none';
  }
}

const handleCompleteTask = (task) => {
  task.classList.add('complete');
}
