import Entity, {Trait} from './Entity.js';
import Go from './traits/Go.js';
import Jump from './traits/Jump.js';
import Velocity from './traits/Velocity.js';
import {loadDahlemSprite} from './sprites.js';

export function createDahlem() {
 return loadDahlemSprite()
 .then(sprite => {
    const dahlem = new Entity();
    dahlem.size.set(18, 64);
  
    dahlem.addTrait(new Go());
    dahlem.addTrait(new Jump());
    //dahlem.addTrait(new Velocity());
  
    dahlem.draw = function drawDahlem(context) {
        sprite.draw('idle', context, this.pos.x, this.pos.y);
    }
    
    return dahlem;
  })
 }
