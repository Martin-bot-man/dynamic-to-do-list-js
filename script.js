document.addEventListener('DOMContentLoaded',event =>{
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
const taskText = taskInput.value.trim();

console.log(taskText)
if(taskText===''){
    alert("Enter a task")
    

}else{
document.createElement('li').textContent= taskText;
document.createElement('button').textContent= "remove"

}
    }
})
