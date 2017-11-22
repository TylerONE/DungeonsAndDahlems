import SpriteSheet from './SpriteSheet.js';
import {loadImage} from './loaders.js';

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

loadImage('gameBase/tileset.png')
.then(image => {
    const sprites = new SpriteSheet(image, 32, 32);
    sprites.define('ground', 0, 0);
    sprites.define('sky', 3, 23);
    
    for(let x = 0; x < 25; ++x) {
        for(let y = 0; y < 14; ++y){
            sprites.draw('sky',context, x * 32, y * 32);  
        }
    }
});
