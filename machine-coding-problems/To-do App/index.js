const input = document.querySelector(".todo");
const addBtn = document.querySelector(".add-btn");
const newTaskDiv = document.querySelector(".new-task");

const tasks = [];
newTaskDiv.innerHTML = "You got no tasks";

const addToDo = () => {
  let todo = input.value;
  tasks.push(todo);
};
const showTodos = (taskList) => {
  tasks.forEach((task) => {
    taskItems.push(task);
    const newtask = document.createElement("li");
    newtask.innerText = task;
    newtask.classList.add("item");
    taskList.appendChild(newtask);
  });
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    newTaskDiv.innerHTML = "";
    console.log(newTaskDiv);
    const taskList = document.createElement("ul");
    newTaskDiv.appendChild(taskList);
    addToDo();
    showTodos(taskList);
  }
  input.value = "";
});

// console.log(taskItems);

// taskItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.add("complete");
//   });
// });
