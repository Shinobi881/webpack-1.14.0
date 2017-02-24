import './stylesheets/main.scss';
import { test, element1, element2 } from './app/module1';

console.warn('Test: ', element1);
// console.warn('Test: ', element2);

const app = document.getElementById('app');

app.append(element1);
app.append(element2);
