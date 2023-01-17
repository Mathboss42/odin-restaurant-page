const template = `
    <div class="container">
    <h2 class='desc'>What is Milliways?</h2>
    <p class='desc'>
    Milliways, better known as the Restaurant at the End of the Universe, 
    is a five star restaurant situated at the end of time and matter. 
    Its main attraction is allowing diners to view a Gnab Gib, before desserts are served.</p>       
    </div>
`;

export function setAbout() {
    const element = document.querySelector('.content');

    element.innerHTML = template;
}