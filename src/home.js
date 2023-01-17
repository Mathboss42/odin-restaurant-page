import Logo from './restaurant-logo.png';
import { appendImage } from './imgAppender';

const template = `
<div class="bubbles">
            <div class="sub-cont">
                <h2>Feeling like having a snack?</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa consectetur dolores corporis aliquam optio ab iure ipsa,
                    at illo neque exercitationem ipsam rem reprehenderit soluta ut ea non cupiditate possimus!
                </p>
            </div>
            <div class="sub-cont">
                <h2>Feeling like blowing up the Universe?</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa consectetur dolores corporis aliquam optio ab iure ipsa,
                    at illo neque exercitationem ipsam rem reprehenderit soluta ut ea non cupiditate possimus!
                </p>
            </div>
        </div>
        <div class="boble">
            <h2>Why not do both!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit cumque culpa, at officiis incidunt nihil dolor eum perspiciatis cum nobis!</p>
        </div>
`;

export function setHome() {
    const element = document.querySelector('.content');
    element.innerHTML = '';

    appendImage(Logo, element, 'logo');
    element.innerHTML += template;
}