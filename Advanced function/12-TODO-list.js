const todoList=   [{
name:'learn javascript',
date:'2026-05-18'
},{name:'practice coding',date:'2026-05-19'}]; 
renderTodoList();

document.querySelector('.Add-todo').addEventListener('click',()=>{addTodo();})

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='Enter'){
    addTodo();

  }
})






function renderTodoList(){
let todolistHTML=''; 
todoList.forEach((todoObject,index)=>{

  const {name,date}=todoObject;
  
  
  
  const html=`<div>${name}</div> <div>${date}</div>
  <button class="js-delete-button"   >Delete</button> `;
 

todolistHTML +=html;
})


document.querySelector('.js-display').innerHTML=todolistHTML;



document.querySelectorAll('.js-delete-button').forEach((deleteButton,index)=>{
  deleteButton.addEventListener('click',()=>{todoList.splice(index,1);
  renderTodoList(); });
  
}
  ) 
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
