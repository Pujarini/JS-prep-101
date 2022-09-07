const input = document.querySelector(".todo");
const addBtn = document.querySelector(".add-btn");
const newTaskDiv = document.querySelector(".new-task");

const tasks = [];
let taskItems = [];
newTaskDiv.innerHTML = "You got no tasks";

const completeTodo = (items) => {
  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.add("complete");
    });
  });
};

// const deleteToDo = (taskItems) => {
// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.add("complete");
//   });
// });
// };

const addToDo = () => {
  let todo = input.value;
  tasks.push(todo);
};
const showTodos = (taskList) => {
  tasks.forEach((task) => {
    const newtask = document.createElement("li");
    newtask.innerText = task;
    newtask.classList.add("item");

    const btn = document.createElement("button");
    btn.innerHTML = ` <i class="fa-solid fa-xmark"></i>`;
    newtask.appendChild(btn);
    taskList.appendChild(newtask);
  });
  const taskItems = newTaskDiv.querySelectorAll(".item");
  if (taskItems.length > 0) {
    completeTodo(taskItems);
    // deleteToDo(taskItems);
  }
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    newTaskDiv.innerHTML = "";
    const taskList = document.createElement("ul");
    newTaskDiv.appendChild(taskList);
    addToDo();
    showTodos(taskList);
  }
  input.value = "";
});
