document.addEventListener('DOMContentLoaded',event =>{
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
//add task function
    function addTask(){
const taskText = taskInput.value.trim();

console.log(taskText)
if(taskText===''){
    alert("Enter a task")
    return

}
const listItem = document.createElement('li');
listItem.textContent= taskText;
//add class to the list item
listItem.classList.add('task-item')
//remove button
const removeButton = document.createElement('button');
removeButton.textContent= "Remove";

removeButton.className ="remove-btn";
    
removeButton.onClick = function(){
listItem.remove();
};
listItem.appendChild(removeButton);
taskList.appendChild(listItem);
taskInput.value=''
//attach event listeners
addButton.addEventListener("onClick",addTask);
taskInput.addEventListener("keypress", function(event){
    if(event.key==="Enter"){
        addTask();
    }
})

    };
function addTask(){
    document.addEventListener('DOMContentLoaded', addTask)
}
})
