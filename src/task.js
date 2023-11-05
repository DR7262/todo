class task {
    constructor(name, comments, dueDate, priority) {
        this.name = name;
        this.comments = comments;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get comment() {
        return this._comment;
    }

    set comment(value) {
        this._comment = value;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(value) {
        this._dueDate = value;
    }

    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
    }
}

export default task;