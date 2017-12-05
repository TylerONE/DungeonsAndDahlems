import SpriteSheet from './SpriteSheet.js';
import {loadImage, loadLevel} from './loaders.js';
import {loadDahlemSprite, loadBackgroundSprites} from './sprites.js';

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
