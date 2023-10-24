const containerInsertTask = document.createElement('div')
containerInsertTask.className = 'insert-task'

const formInsertTask = document.createElement('form')
formInsertTask.className = 'form-task'

const title = document.createElement('h2')
title.innerText = 'Add task'
title.className = 'title-form'

const containerInputs = document.createElement('div')
containerInputs.className = 'inputs-form'

const inputTitleTask = document.createElement('input')
inputTitleTask.id = 'title'
inputTitleTask.className = 'title-task'
inputTitleTask.placeholder = 'Enter task'
inputTitleTask.required = true

const selectTypeTask = document.createElement('select')
selectTypeTask.id = 'type'
selectTypeTask.innerHTML= `
<option value="" disabled selected hidden>Select type</option>
<option value="urgent">Urgent</option>
<option value="priority">Priority</option>
<option value="quiet">Quiet</option>
`
selectTypeTask.required = true
selectTypeTask.className = 'type-task'



const submitButton = document.createElement('button')
submitButton.type = 'submit'
submitButton.className = 'submit-form'
submitButton.innerText = 'Add task to list'
submitButton.addEventListener('click', () => {
  if (inputTitleTask.value && selectTypeTask.value){
    tasks.push({
      title: inputTitleTask.value,
      type: selectTypeTask.value
    })
  }
  inputTitleTask.value = ''
  selectTypeTask.value = ''
  reloadList()
})


containerInputs.appendChild(inputTitleTask)
containerInputs.appendChild(selectTypeTask)

formInsertTask.appendChild(title)
formInsertTask.appendChild(containerInputs)
formInsertTask.appendChild(submitButton)

containerInsertTask.appendChild(formInsertTask)