import './styles.css';
import { setHome } from './home.js';
import { setAbout } from './about';
import { setMenu } from './menu';
import { setContact } from './contact';

const navList = document.querySelectorAll('li');
const heading = document.querySelector('h1');
navList.forEach(el => el.addEventListener('click', switchContent));
heading.addEventListener('click', setHome);

function switchContent(el) {
    switch (el.target.innerHTML) {
        case 'Menu':
            setMenu();
            break;
        case 'About':
            setAbout();
            break;
        case 'Contact':
            setContact();
            break;
    }
}

setHome();

