import task from './task.js';

class project {
    constructor(name) {
        this.name = name;
        this.taskList = [];
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value;
    }

    addTask(taskName, comments, dueDate, priority) {
        let newTask = new task(taskName, comments, dueDate, priority)
        this.taskList.push(newTask);
    }
}

export default project;