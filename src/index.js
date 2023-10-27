import './style.css';
import project from './project.js'

const test = new project('General');
test.addTask('My Task');
console.log(test.name);
console.log(test.taskList[0].name);

console.log('Test Successful!');