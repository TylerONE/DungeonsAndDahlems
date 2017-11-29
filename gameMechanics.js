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

function loadBackgroundSprites() {
    return loadImage('gameBase/tileset.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 32, 32);
        sprites.define('upperGround', 0, 0);
        sprites.define('lowerGround', 0, 1);
        sprites.define('sky', 2.92, 22.89);
        return sprites;
    });
}

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');
    
Promise.all([
    loadBackgroundSprites(),
    loadLevel('level1'),
    ])
.then(([sprites, level]) => {
    console.log('Level loaded', level);
    level.backgrounds.forEach(background => {
        drawBackground(background, context, sprites);
        });
});
