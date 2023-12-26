const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const altText = ['Eye Image', 'Sea waves', 'Flowers', 'Old Paintings', 'Butterfly on the leaf']
/* Looping through images */
for(let i = 0; i < 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${images[i]}`);
    newImage.setAttribute('alt', `${altText[i]}`);
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
    if(e.target.textContent === 'Darken'){
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'
        e.target.textContent = "Lighten"
    }else{
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'
        e.target.textContent = "Darken"
    }
})