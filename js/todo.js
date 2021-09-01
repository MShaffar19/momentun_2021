const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDO(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDO(newTodoObj);
    saveToDos();
}

// JSON.parse()�� �迭�� �ٲ��ִ� �޼ҵ� (�ѹ��� �� ��µ��� �ʰ� �ѹ��� �Ѱ��� ����� ��)
// function sayHello(item){
//     console.log("this is a the turn of ", item);
// }

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);

    // JSON.parse()�� �迭�� �ٲ��ִ� �޼ҵ�
    // parsedToDos.forEach(sayHello);

    toDos = parsedToDos;
    parsedToDos.forEach(paintToDO)
    
}
