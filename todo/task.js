const form = document.forms.tasks__form
let tasksList = document.getElementById('tasks__list');
const inputTask = document.getElementById('task__input')
let taskRemove = document.getElementsByClassName('task__remove')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inputTask.value.trim()) {
        tasksList.insertAdjacentHTML('afterBegin', `<div class="task"><div class="task__title">${inputTask.value}</div><a href="#" class="task__remove">&times;</a></div>`)
    }    
    form.reset()
})

tasksList.addEventListener('click', (e) => {    
    if (e.target.className === 'task__remove') {
        e.target.parentElement.remove() 
    } 
})