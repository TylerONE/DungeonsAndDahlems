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
function loadDahlemSprite() {
    return loadImage('gameBase/Character.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 32, 32);
        sprites.define('idle', 259, 1, 16, 32);
        return sprites;
    });
}

function loadBackgroundSprites() {
    return loadImage('gameBase/tileset.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 32, 32);
        sprites.defineTile('upperGround', 0, 0);
        sprites.defineTile('lowerGround', 0, 1);
        sprites.defineTile('sky', 2.92, 22.89);
        return sprites;
    });
}

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');
    
Promise.all([
    loadDahlemSprite(),
    loadBackgroundSprites(),
    loadLevel('level1'),
    ])
.then(([dahlemSprite, sprites, level]) => {
    level.backgrounds.forEach(background => {
        drawBackground(background, context, sprites);
        });
    
    dahlemSprite.draw('idle', context, 64, 64);
});
