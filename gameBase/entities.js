import Entity from './Entity.js';
import {loadDahlemSprite} from './sprites.js';


export function createDahlem() {
 return loadDahlemSprite()
 .then(sprite => {
    const dahlem = new Entity();
    
    dahlem.draw = function drawDahlem(context) {
        sprite.draw('idle', context, this.pos.x, this.pos.y);
    }
    
    dahlem.update = function updateDahlem(deltaTime) {
        this.pos.x += this.vel.x * deltaTime;
        this.pos.y += this.vel.y * deltaTime;
    }
    return dahlem;
  })
 }
