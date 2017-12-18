
import Timer from './gameBase/Timer.js';
import {loadLevel} from './gameBase/loaders.js';
import {createDahlem} from './gameBase/entities.js';
import {createCollisionLayer} from './gameBase/layers.js';
import Entity from './gameBase/Entity.js';

import Keyboard from './gameBase/KeyboardState.js';

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

Promise.all([
    createDahlem(),
    loadLevel('level1'),
    ])
.then(([dahlem, level]) => {
   
    const gravity = 800;
    dahlem.pos.set(64, -12000);
    
    level.comp.layers.push(createCollisionLayer(level));
    
    level.entities.add(dahlem);
    
    const input = setupKeyboard(dahlem);

    input.listenTo(window);
    
    ['mousedown', 'mousemove'].forEach(eventName => {
        canvas.addEventListener(eventName, event => {
            if (event.buttons === 1) {
             dahlem.vel.set(0, 0);
             dahlem.pos.set(event.offsetX, event.offsetY);   
            }
        });
    });
    
    
    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
            level.update(deltaTime);
            level.comp.draw(context); 
            dahlem.vel.y += gravity * deltaTime;
    }
    
    timer.start();
});
