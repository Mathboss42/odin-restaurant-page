import './styles.css';
import { setHome as setHome} from './home.js';

const navList = document.querySelectorAll('li');
console.log(navList)
navList.forEach(el => el.addEventListener('click', switchContent));

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

