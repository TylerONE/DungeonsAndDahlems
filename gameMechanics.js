
import Timer from './gameBase/Timer.js';
import Entity from './gameBase/Entity.js';
import {loadLevel} from './gameBase/loaders.js';
import {createDahlem} from './gameBase/entities.js';

import Keyboard from './gameBase/KeyboardState.js';

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

Promise.all([
    createDahlem(),
    loadLevel('level1'),
    ])
.then(([dahlem, level]) => {
   
    const gravity = 800;
    dahlem.pos.set(64, 384);
    
    const SPACE = 32;
    const input = new Keyboard();
    input.addMapping(SPACE, keyState => {
        if (keyState) {
            dahlem.jump.start();
        } else {
            dahlem.jump.cancel(); 
        }
    });
    input.listenTo(window);
    
    
    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
            dahlem.update(deltaTime);
            level.comp.draw(context); 
            dahlem.vel.y += gravity * deltaTime;
    }
    
    timer.start();
});
