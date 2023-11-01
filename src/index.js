import './style.css';
import project from './project.js'
import renderProject from './domController';

const test = new project('General');
test.addTask('My Task');
test.addTask('My Task 2');

renderProject(test, document.getElementById('project-content'));