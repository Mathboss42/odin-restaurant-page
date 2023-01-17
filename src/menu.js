import foodA from './food01.jpg';
import foodB from './food02.jpg';
import { appendImage } from './imgAppender';

const template = `
<div class="menu-item"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ex optio explicabo, tenetur reiciendis asperiores sequi libero at vel quam.</p></div>
<div class="menu-item"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ex optio explicabo, tenetur reiciendis asperiores sequi libero at vel quam.</p></div>
`;


export function setMenu() {
    const element = document.querySelector('.content');
    element.innerHTML = '';
    const container = document.createElement('div')
    container.classList.add('container');
    container.classList.add('food-container');
    element.appendChild(container)
    appendImage(foodA, container, 'foodA');
    appendImage(foodB, container, 'foodB');
    container.innerHTML += template;
}