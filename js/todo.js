const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function deleleTodo(event) {
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id))
  saveTodos()
}

function paintTodo(newTodo) {
  const li = document.createElement("li")
  li.id = newTodo.id
  const span = document.createElement("span")
  span.innerText = newTodo.text
  const button = document.createElement("button")
  button.innerText = "×"
  button.addEventListener('click',deleleTodo)
  li.appendChild(span)
  li.appendChild(button)
  todoList.appendChild(li)
}

function handleTodoSubmit(event) {
  event.preventDefault()
  const newTodo = todoInput.value // input의 현재값을 새로운 변수에 복사
  todoInput.value = ""
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj)
  paintTodo(newTodoObj)
  saveTodos()
}

todoForm.addEventListener("submit", handleTodoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos)
  // console.log(parsedTodos)
  toDos = parsedTodos
  parsedTodos.forEach(paintTodo)
}
