const images = [ "0.jpeg", "1.jpeg", "2.jpeg" , "3.jpeg"];

const choseImage = images[Math.floor(Math.random() * images.length )];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage);

bgImage.id = 'bgImage';
