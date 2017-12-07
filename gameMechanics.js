import Compositor from './gameBase/Compositor.js';
import Entity from './gameBase/Entity.js';
import {loadLevel} from './gameBase/loaders.js';
import {loadDahlemSprite, loadBackgroundSprites} from './gameBase/sprites.js';
import {createBackgroundLayer} from './gameBase/layers.js';

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');


function createSpriteLayer(entity) {
    return function drawSpriteLayer(context) {
        entity.draw(context);
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
   
    const gravity = 0.5;
    
    const dahlem = new Entity();
    dahlem.pos.set(64, 180);
    dahlem.vel.set(2, -10);
    
    dahlem.draw = function drawDahlem(context) {
        dahlemSprite.draw('idle', context, this.pos.x, this.pos.y);
    }
    
    dahlem.update = function updateDahlem() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }
    
    const spriteLayer = createSpriteLayer(dahlem);
    comp.layers.push(spriteLayer);
    
    function update() {
        comp.draw(context); 
        dahlem.update();
        dahlem.vel.y += gravity;
        requestAnimationFrame(update);
    }
    
    update();
});
