export function appendImage(img, element) {
    const newImg = new Image();
    newImg.src = img;

    element.appendChild(newImg);
}