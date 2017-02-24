import './stylesheets/main.scss';
import { test, element1 } from './app/module1';

console.warn('Test: ', element1);

const app = document.getElementById('app');

app.append(element1);
