import SpriteSheet fom './SpriteSheet.js';

function loadImage(url){
 return new Promise(resolve => {
     const image = new Image();
     image.addEventListener('load', () =>{
         resolve(image);
     });
     image.src = url;
 });
}

loadImage('gameBase/tileset.png')
.then(image => {
    const sprites = new SpriteSheet(image, 32, 32);
    sprites.define('ground', 0, 0);
    sprites.draw('ground',context, 45, 62);
 
