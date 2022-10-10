const todo = document.querySelector(".todos");
const btn = document.querySelector(".cta");
const output = document.querySelector(".output");

const todoList = [];

function deleteTodo() {
  console.log(this.parentNode);
  const item = this.parentNode;
  const ul = item.parentNode;
  ul.removeChild(item);
}

function editTodo() {
  const li = this.parentNode;
  const inp = li.querySelector(".editmodeno");
  const editBtn = li.querySelector(".edit");
  const idx = todoList.indexOf(inp.value);
  if (editBtn.innerHTML === "edit") {
    editBtn.innerHTML = "save";
    inp.removeAttribute("readonly");
    todoList[idx] = inp.value;
  } else {
    inp.setAttribute("readonly", true);
    editBtn.innerHTML = "edit";
  }
}

function addNewToDo(ul) {
  let li = document.createElement("li");
  const inp = document.createElement("input");
  inp.classList.add("editmodeno");
  inp.setAttribute("readonly", true);
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerHTML = "edit";
  const delBtn = document.createElement("button");
  delBtn.classList.add("del");
  delBtn.innerHTML = "delete";

  todoList.forEach((item) => {
    inp.value = item;
    li.appendChild(inp);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
  });
  delBtn.addEventListener("click", deleteTodo);
  editBtn.addEventListener("click", editTodo);

  ul.appendChild(li);
  output.appendChild(ul);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todo.value) {
    todoList.push(todo.value);
    const list = document.querySelector("ul");
    if (list) {
      addNewToDo(list);
    } else {
      const newTodo = document.createElement("ul");
      addNewToDo(newTodo);
    }
    todo.value = "";
  }
});
