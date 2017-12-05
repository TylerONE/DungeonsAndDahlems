import Compositor from './Compositor.js';
import {loadLevel} from './loaders.js';
import {loadDahlemSprite, loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer} from '.layers.js';

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');


function createSpriteLayer(sprite, pos) {
    return function drawSpriteLayer(context) {
           sprite.draw('idle', context, pos.x, pos.y);
    }
}

Promise.all([
    loadDahlemSprite(),
    loadBackgroundSprites(),
    loadLevel('level1'),
    ])
.then(([dahlemSprite, sprites, level]) => {
    const comp = new Compositor();
    
    const backgroundLayer = createBackgroundLayer(level.backgrounds, sprites);
    comp.layers.push(backgroundLayer);
   
    
    const pos = {
        x: 64,
        y:64,
    };
    
    const spriteLayer = createSpriteLayer(dahlemSprite, pos);
    comp.layers.push(spriteLayer);
    
    function update() {
        comp.draw(context); 
        pos.x += 2;
        pos.y += 2;
        requestAnimationFrame(update);
    }
    
    update();
});
