const todoList=['Hello','Bonjour']; /* here we creat variable to save data in an array  */
renderTodoList();

function renderTodoList(){
let todolistHTML=''; 


for(let i =0; i< todoList.length; i++){                /**From line 8 to 16 we folllow the step to generate the html */
  const todo=todoList[i];
  const html=`<p>${todo}</p>`;

todolistHTML +=html;
}
console.log(todolistHTML);
document.querySelector('.js-display').innerHTML=todolistHTML;
}

function addTodo(){
    const InputElement = document.querySelector('.js-name-input');
  const name= InputElement.value;
  

  todoList.push(name);
  console.log(todoList);
  InputElement.value='';

renderTodoList();
}
