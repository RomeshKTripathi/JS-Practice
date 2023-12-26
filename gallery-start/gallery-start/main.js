const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg': 'Closeup of a Human eye',
    'pic2.jpg': 'Stone that look like a wave',
    'pic3.jpg': 'Purple color flowers',
    'pic4.jpg': 'Image of old wall Paintings',
    'pic5.jpg': 'Butterfly on the leaf'
}
/* Looping through images */
for(const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', `${altText[image]}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', changeImage)
}

function changeImage(e){
    const image = e.target.getAttribute('src')
    const altText = e.target.getAttribute('alt')
    displayedImage.setAttribute('src', image)
    displayedImage.setAttribute('alt', altText)
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (e)=>{
    const currentTheme = e.target.getAttribute('class');
    switch (currentTheme) {
        case "light":
            overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
            e.target.setAttribute('class', 'dark')
            btn.textContent = "Lighten";
            break;
        case 'dark':
            overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
            e.target.setAttribute('class', 'light')
            btn.textContent = "Darken";
        default:
            break;
    }

})