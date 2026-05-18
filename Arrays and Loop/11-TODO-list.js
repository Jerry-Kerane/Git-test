const todoList=   [{
name:'learn javascript',
date:'2026-05-18'
},{name:'practice coding',date:'2026-05-19'}]; /* here we creat variable to save data in an array  */
renderTodoList();

function renderTodoList(){
let todolistHTML=''; 


for(let i =0; i< todoList.length; i++){                /**From line 8 to 16 we folllow the step to generate the html */
  const todoObject=todoList[i];
  const {name,date}=todoObject;
  
  /*const name=todoObject.name;
  const date=todoObject.date;*/ /* de 13 a 14 j'ai aussi trouvé c'etait beacoup trop encombrant de faire autant de  ligne de code i will use the destructuring methode */
  
  
  const html=`<div>${name}</div> <div>${date}</div>
  <button class="js-delete-button"   onclick="
  todoList.splice(${i},1);
  renderTodoList();           
  ">Delete</button> `;
  /* here we create the html code to display the todo list and also add a delete button to each todo item and we use splice to remove element on the page */

todolistHTML +=html;
}
console.log(todolistHTML);
document.querySelector('.js-display').innerHTML=todolistHTML;
}

function addTodo(){
    const InputElement = document.querySelector('.js-name-input');
  const name= InputElement.value;
  const dateInputElement=document.querySelector('.js-do-date-input');
  const date=dateInputElement.value;

  todoList.push({name,date});
  console.log(todoList);
  InputElement.value='';

renderTodoList();
}
