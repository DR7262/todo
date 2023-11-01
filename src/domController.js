function renderProject(project, targetElement) {
    //Creating project title section
    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.name;

    //Render project contents to domSection
    targetElement.appendChild(projectTitle);
    renderTasks(project, targetElement);
};

function renderTasks(project, targetElement) {
    for (let i = 0; i < project.taskList.length; i++) {
        renderTask(project.taskList[i], targetElement)
    };
};

function renderTask(task, targetElement) {
    //create new task element
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('task');
    taskContainer.textContent = task.name;

    //render task element to selected target
    targetElement.appendChild(taskContainer);
}

export default renderProject;