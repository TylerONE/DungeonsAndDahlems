import Compositor from './gameBase/Compositor.js';
import {loadLevel} from './gameBase/loaders.js';
import {loadDahlemSprite, loadBackgroundSprites} from './gameBase/sprites.js';
import {createBackgroundLayer} from './gameBase/layers.js';

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');


function createSpriteLayer(sprite, pos) {
    return function drawSpriteLayer(context) {
           for (let i = 0; i < 20; ++i) {
            sprite.draw('idle', context, pos.x + i * 16, pos.y);
           }
    }
}

Promise.all([
    loadDahlemSprite(),
    loadBackgroundSprites(),
    loadLevel('level1'),
    ])
.then(([dahlemSprite, backgroundSprites, level]) => {
    const comp = new Compositor();
    
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    comp.layers.push(backgroundLayer);
   
    
    const pos = {
        x:0,
        y:0,
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
