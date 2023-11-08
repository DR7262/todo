import { CompassCalibration } from '@mui/icons-material';
import edit from './edit.svg';

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
    let taskTitleContainer = document.createElement('div');
    taskTitleContainer.classList.add('task-title-container');
    let taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title')
    taskTitle.textContent = task.name;
    taskTitleContainer.appendChild(taskTitle)
    //add edit button for task title
    let editTaskTitle = new Image();
    editTaskTitle.classList.add('edit');
    editTaskTitle.src = edit;
    bindEditBtnToField(editTaskTitle, taskTitle);
    taskTitleContainer.appendChild(editTaskTitle);
    taskContainer.appendChild(taskTitleContainer);

    //add priority button to task element
    let priorityContainer = document.createElement('div');
    priorityContainer.classList.add('priority-container');
    priorityContainer.textContent = 'Priority: ';
    let priorityButton = document.createElement('select');
    priorityButton.classList.add('priority-button');
    let priorityChoices = ['High', 'Medium', 'Low']
    for (var i = 0; i < priorityChoices.length; i++) {
        var option = document.createElement("option");
        option.value = priorityChoices[i];
        option.text = priorityChoices[i];
        priorityButton.appendChild(option);
    };
    priorityContainer.appendChild(priorityButton);
    

    //add delete button to task element
    let deleteTaskButton = document.createElement('button');
    deleteTaskButton.classList.add('delete-task');
    deleteTaskButton.textContent = 'X';
    deleteTaskButton.addEventListener('click', e => {
        project.taskList = project.taskList.filter((item) => item != task);
        e.currentTarget.parentElement.remove();
    });
    

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.appendChild(priorityContainer);
    buttonContainer.appendChild(deleteTaskButton);
    taskContainer.appendChild(buttonContainer);


    //add comments section to task element
    let commentSectionContainer = document.createElement('div');
    commentSectionContainer.classList.add('comment-section');
    let commentSectionContent = document.createElement('div');
    commentSectionContent.classList.add('comment-section-content');
    commentSectionContent.textContent = 'Insert Comment Here';
    commentSectionContainer.appendChild(commentSectionContent);
    //add edit button for comment content
    let editCommentSection = new Image();
    editCommentSection.classList.add('edit');
    editCommentSection.src = edit;
    bindEditBtnToField(editCommentSection, commentSectionContent);
    commentSectionContainer.appendChild(editCommentSection);
    taskContainer.appendChild(commentSectionContainer);
    
    //add date picker to task element
    let datePicker = document.createElement('input');
    datePicker.className = datePicker.value === '' ? 'empty-date-picker' : 'date-picker';
    datePicker.setAttribute('type', 'date');
    datePicker.addEventListener('input', e => {
        datePicker.className = datePicker.value === '' ? 'empty-date-picker' : 'date-picker';
    });
    taskContainer.appendChild(datePicker);

    //render task element to selected target
    targetElement.appendChild(taskContainer);
};

function bindEditBtnToField(btn, textField) {
    btn.addEventListener('click', () => {
        textField.setAttribute('contenteditable', textField.getAttribute('contenteditable') != 'true' ? 'true' : 'false');
        textField.focus();
    });
};

export default renderProject;