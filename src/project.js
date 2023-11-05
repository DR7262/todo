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

    addTask(taskName, comment, dueDate, priority) {
        let newTask = new task(taskName, comment, dueDate, priority)
        this.taskList.push(newTask);
    }
}

export default project;