import task from './task.js';

class project {
    constructor(name) {
        this.name = name;
        this.taskList = [];
    }

    addTask = (name) => {
        const newTask = new task(name);
        this.taskList.push(newTask);
    }
}

export default project;