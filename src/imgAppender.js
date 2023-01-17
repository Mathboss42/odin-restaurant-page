export function appendImage(img, element, cssClass = '') {
    const newImg = new Image();
    newImg.src = img;

    let newEl = element.appendChild(newImg);
    
    if (cssClass !== '') {
        newEl.classList.add(cssClass);
    }
}