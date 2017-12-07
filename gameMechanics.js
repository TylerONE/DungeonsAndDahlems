import Compositor from './gameBase/Compositor.js';
import Timer from './gameBase/Timer.js';
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
   
    const gravity = 800;
    dahlem.pos.set(64, 384);
    dahlem.vel.set(200, -600);
    
    const spriteLayer = createSpriteLayer(dahlem);
    comp.layers.push(spriteLayer);
    
    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
            dahlem.update(deltaTime);
            comp.draw(context); 
            dahlem.vel.y += gravity * deltaTime;
    }
    
    timer.start();
});
