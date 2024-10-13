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
const listItem = document.createElement('li');
listItem.textContent= taskText;
removeButton = document.createElement('button');
removeButton.textContent= "remove";
removeButton.className ="remove-btn";

removeButton.onClick = function(){
listItem.remove();
};
listItem.appendChild(removeButton);
taskList.appendChild(listItem);
taskInput.value=''
addButton.addEventListener("onClick",addTask);
taskInput.addEventListener("keypress", function(event){
    if(event.key==="Enter"){
        addTask();
    }
})
}
    };
function addTask(){
    document.addEventListener('DOMContentLoaded', addTask)
}
})
