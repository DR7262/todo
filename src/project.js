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

    addTask(taskName) {
        let newTask = new task(taskName)
        this.taskList.push(newTask);
    }
}

export default project;