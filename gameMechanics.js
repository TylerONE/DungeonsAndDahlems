import SpriteSheet from './SpriteSheet.js';
import {loadImage} from './loaders.js';

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

loadImage('gameBase/tileset.png')
.then(image => {
    const sprites = new SpriteSheet(image, 32, 32);
    sprites.define('ground', 0, 0);
    sprites.define('sky', 96, 655);
    sprites.draw('sky',context, 45, 62);
});
