const template = `
    <div class="form-container container">
    <form action="get">
    <h3>You may contact us, but we much rather you didn't.</h3>
    <label for="email">E-Mail</label>
    <input type="email" id="email">
    <label for="message">Message</label>
    <input type="text" id="message">
    <input type="submit" id="submit">
</form>   
    </div>
`;

export function setContact() {
    const element = document.querySelector('.content');

    element.innerHTML = template;
}