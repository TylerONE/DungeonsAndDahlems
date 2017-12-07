import Compositor from './gameBase/Compositor.js';
import Entity from './gameBase/Entity.js';
import {loadLevel} from './gameBase/loaders.js';
import {createDahlem} from './gameBase/entities.js';
import {loadBackgroundSprites} from './gameBase/sprites.js';
import {createBackgroundLayer, createSpriteLayer} from './gameBase/layers.js';

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

Promise.all([
    createDahlem(),
    loadBackgroundSprites(),
    loadLevel('level1'),
    ])
.then(([dahlem, backgroundSprites, level]) => {
    const comp = new Compositor();
    
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    comp.layers.push(backgroundLayer);
   
    const gravity = 0.5;
    
    const spriteLayer = createSpriteLayer(dahlem);
    comp.layers.push(spriteLayer);
    
    let deltaTime = 0;
    let lastTime = 0;
    
    function update(time) {
        deltaTime = time - lastTime;
        console.log(time, deltaTime);
        
        comp.draw(context); 
        dahlem.update(deltaTime);
        dahlem.vel.y += gravity;
        requestAnimationFrame(update);
        
        lastTime = time;
    }
    
    update();
});
