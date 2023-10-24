const containerListTask = document.createElement('div')
containerListTask.className = 'list-tasks'

const titleList = document.createElement('h2')
titleList.className = 'title-list'
titleList.innerText = 'Tasks'

containerListTask.appendChild(titleList)

const containerAllTasks = document.createElement('div')
containerAllTasks.className = 'all-tasks'
for (i in tasks){
  const containerTask = document.createElement('div')
  containerTask.className = 'task'
  
  const typeTask = document.createElement('div')
  typeTask.className = 'type-task'
  typeTask.style.width = '15px'
  typeTask.style.height = '15px'
  typeTask.style.borderRadius = '50%'
  typeTask.innerText = ' '
  if (tasks[i].type.toLowerCase() == 'urgent'){
    typeTask.style.backgroundColor = 'yellow'
  }
  if (tasks[i].type.toLowerCase() == 'priority'){
    typeTask.style.backgroundColor = 'red'
  }
  if (tasks[i].type.toLowerCase() == 'quiet'){
    typeTask.style.backgroundColor = 'green'
  }

  const titleTask = document.createElement('p')
  titleTask.className = 'title-task'
  titleTask.innerText = tasks[i].title

  const deleteTask = document.createElement('button')
  deleteTask.className = 'btn-delete'
  const iconTrash = document.createElement('i')
  iconTrash.className = 'fa fa-trash'
  deleteTask.appendChild(iconTrash)

  containerTask.appendChild(typeTask)
  containerTask.appendChild(titleTask)
  containerTask.appendChild(deleteTask)
  containerAllTasks.appendChild(containerTask)
}
containerListTask.appendChild(containerAllTasks)


