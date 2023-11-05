import AirDatepicker from "air-datepicker";

function renderProject(project, targetElement) {
    //Creating project title section
    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.name;

    //Creating task lisk section
    const taskListContainer = document.createElement('div');
    taskListContainer.classList.add('task-list');

    //Render project contents to domSection
    renderTasks(project, taskListContainer);
    targetElement.appendChild(projectTitle);
    targetElement.appendChild(taskListContainer);
};

function renderTasks(project, targetElement) {
    for (let i = 0; i < project.taskList.length; i++) {
        renderTask(project, project.taskList[i], targetElement)
    };
};

function renderTask(project, task, targetElement) {
    //create new task element
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('task');
    
    //add title to task element
    let taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = task.name;
    taskContainer.appendChild(taskTitle);

    //add delete button to task element
    let deleteTaskButton = document.createElement('button');
    deleteTaskButton.classList.add('delete-task');
    deleteTaskButton.textContent = 'X';
    deleteTaskButton.addEventListener('click', e => {
        project.taskList = project.taskList.filter((item) => item != task);
        e.currentTarget.parentElement.remove();
    });
    taskContainer.appendChild(deleteTaskButton);

    //add comments section to task element
    let commentSection = document.createElement('div');
    commentSection.classList.add('commentSection');
    commentSection.textContent = 'Insert Comment Here';
    taskContainer.appendChild(commentSection);
    
    //add date picker to task element
    let datePicker = document.createElement('input');
    datePicker.className = datePicker.value === '' ? 'empty-date-picker' : 'date-picker';
    datePicker.setAttribute('type', 'date');
    datePicker.addEventListener('input', e => {
        datePicker.className = datePicker.value === '' ? 'empty-date-picker' : 'date-picker';
    });
    taskContainer.appendChild(datePicker);

    //add priority indicator to task element

    //render task element to selected target
    targetElement.appendChild(taskContainer);
};

export default renderProject;