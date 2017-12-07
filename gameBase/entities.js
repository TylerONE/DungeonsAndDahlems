import Entity, {Trait} from './Entity.js';
import {loadDahlemSprite} from './sprites.js';

class Velocity extends Trait {
 constructor() {;
   super('velocity');
 }
 
 update(entity, deltaTime) {
        entity.pos.x += entity.vel.x * deltaTime;
        entity.pos.y += entity.vel.y * deltaTime;
 }
}

export function createDahlem() {
 return loadDahlemSprite()
 .then(sprite => {
    const dahlem = new Entity();
    
    dahlem.addTrait(new Velocity());
  
    dahlem.draw = function drawDahlem(context) {
        sprite.draw('idle', context, this.pos.x, this.pos.y);
    }
    
    return dahlem;
  })
 }
