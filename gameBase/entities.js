import Entity from './Entitiy.js';
import {loadDahlemSprite} from './sprites.js';


export function createDahlem() {
 return loadDahlemSprite()
 .then(sprite => {
    const dahlem = new Entity();
    dahlem.pos.set(64, 180);
    dahlem.vel.set(2, -10);
    
    dahlem.draw = function drawDahlem(context) {
        sprite.draw('idle', context, this.pos.x, this.pos.y);
    }
    
    dahlem.update = function updateDahlem() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }
    return dahlem;
  })
 }
