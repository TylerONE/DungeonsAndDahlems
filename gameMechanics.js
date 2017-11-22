import SpriteSheet from './SpriteSheet.js';

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

loadImage('gameBase/tileset.png')
.then(image => {
    const sprites = new SpriteSheet(image, 32, 32);
    sprites.define('ground', 0, 0);
    sprites.draw('ground',context, 45, 62);
});
