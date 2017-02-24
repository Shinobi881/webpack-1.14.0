// import './stylesheets/main.scss';
import { test, element1 } from './module1';
// const test = require('./module1.js');

console.warn('Test: ', element1);

const app = document.getElementById('app');

app.append(element1);
