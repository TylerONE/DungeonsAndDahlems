import SpriteSheet from './SpriteSheet.js';
import {loadImage} from './loaders.js';

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

loadImage('gameBase/tileset.png')
.then(image => {
    const sprites = new SpriteSheet(image, 32, 32);
    sprites.define('upperGround', 0, 0);
    sprites.define('lowerGround', 0, 1);
    sprites.define('sky', 2.92, 22.89);
    
    for(let x = 0; x < 47; ++x) {
        for(let y = 0; y < 16; ++y){
            sprites.drawTile('sky',context, x, y);  
        }
    }
    
    for(let x = 0; x < 47; ++x) {
        for(let y = 12; y < 16; ++y){
            sprites.drawTile('upperGround',context, x, y);  
        }
    }
    
    for(let x = 0; x < 47; ++x) {
        for(let y = 14; y < 16; ++y){
            sprites.drawTile('lowerGround',context, x, y);  
        }
    }
});
