import Compositor from './gameBase/Compositor.js';
import {loadLevel} from './gameBase/loaders.js';
import {loadDahlemSprite, loadBackgroundSprites} from './gameBase/sprites.js';
import {createBackgroundLayer} from './gameBase/layers.js';

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');


function createSpriteLayer(sprite, pos) {
    return function drawSpriteLayer(context) {
     sprite.draw('idle', context, pos.x, pos.y);
    }
}

class Vec2 {
    constructor(x, y) {
        this.set(x, y);
    }
    
    set(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Entity {
    constructor() {
     this.pos = new Vec2(0, 0); 
        this.vel = new Vec2(0, 0);
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
    
    dahlem.update = function updateDahlem() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }
    
    const spriteLayer = createSpriteLayer(dahlemSprite, dahlem.pos);
    comp.layers.push(spriteLayer);
    
    function update() {
        comp.draw(context); 
        dahlem.update();
        dahlem.vel.y += gravity;
        requestAnimationFrame(update);
    }
    
    update();
});
