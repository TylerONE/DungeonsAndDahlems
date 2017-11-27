import SpriteSheet from './SpriteSheet.js';
import {loadImage, loadLevel} from './loaders.js';

function drawBackground(background, context, sprites) {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        
    for(let x = x1; x < x2; ++x) {
        for(let y = y1; y < y2; ++y){
            sprites.drawTile(background.tile, context, x, y);  
        }
    }
    });
}

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

loadImage('gameBase/tileset.png')
.then(image => {
    const sprites = new SpriteSheet(image, 32, 32);
    sprites.define('upperGround', 0, 0);
    sprites.define('lowerGround', 0, 1);
    sprites.define('sky', 2.92, 22.89);
    
    loadLevel('level1')
    .then(level => {
        console.log(level);
        drawBackground(level.backgrounds[0], context, sprites);
    });
        
    
    for(let x = 0; x < 47; ++x) {
        for(let y = 12; y < 16; ++y){
            sprites.drawTile('upperGround',context, x, y);  
        }
    }
    
    for(let x = 0; x < 47; ++x) {
        for(let y = 13; y < 16; ++y){
            sprites.drawTile('lowerGround',context, x, y);  
        }
    }
});
