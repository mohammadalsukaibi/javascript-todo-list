document.querySelector('#button-addon2').addEventListener('click', addTask)

// we use event delegation because the delete icon is not loaded yet
document.querySelector('.tasks').addEventListener('click', deleteTask)

document.querySelector('.tasks').addEventListener('click', crossTask)

// UI variables
const taskText = document.querySelector('.taskText')
const tasks = document.querySelector('.tasks')

function crossTask(e){
    if(e.target.classList.contains('myCheck')){
        if(e.target.previousElementSibling.style.textDecorationLine == "line-through"){
            e.target.previousElementSibling.style.textDecorationLine = "none";
        }else{
            e.target.previousElementSibling.style.textDecorationLine = "line-through";
        }
    }
}


function addTask(){
    // create the label
    const label = document.createElement('label')
    // add the class
    label.className = 'b-contain'
    // create and add the span
    const span = document.createElement('span')
    const theText = document.createTextNode(taskText.value)
    span.appendChild(theText)
    // add the span to the label
    label.appendChild(span)

    // add the input
    const input = document.createElement('input')
    input.className = 'myCheck'
    input.setAttribute('type', 'checkbox')
    // add the input to the label
    label.appendChild(input)

    // add the div
    const checkbox = document.createElement('div')
    checkbox.className = 'b-input'
    // add it to the label
    label.appendChild(checkbox)

    // create the task div
    const taskDiv = document.createElement('div')
    taskDiv.className = 'task'

    // append the label to task
    taskDiv.appendChild(label)

    // add the trash
    const trash = document.createElement('i')
    trash.classList.add('fas', 'fa-trash', 'deleteTask')
    // add it to the task
    taskDiv.appendChild(trash)

    // append to tasks
    tasks.appendChild(taskDiv)
    const hr = document.createElement('hr')
    tasks.appendChild(hr)

    // clear the task input
    taskText.value = '';

}

function deleteTask(e){
    if(e.target.classList.contains('deleteTask')){
        e.target.parentElement.nextElementSibling.remove()
        e.target.parentElement.remove()
        
    }
}