import Logo from './restaurant-logo.png';
import { appendImage } from './imgAppender';

const template = `
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Culpa consectetur dolores corporis aliquam optio ab iure ipsa, 
    at illo neque exercitationem ipsam rem reprehenderit soluta ut ea non cupiditate possimus!
    </p>
`;

export function setHome() {
    const element = document.querySelector('.content');

    appendImage(Logo, element);
    element.innerHTML += template;
}