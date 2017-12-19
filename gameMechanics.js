import Camera from './gameBase/Camera.js';
import Timer from './gameBase/Timer.js';
import {loadLevel} from './gameBase/loaders.js';
import {createDahlem} from './gameBase/entities.js';
import {createCollisionLayer} from './gameBase/layers.js';
import {setupKeyboard} from './gameBase/input.js';
import Entity from './gameBase/Entity.js';

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

Promise.all([
    createDahlem(),
    loadLevel('level1'),
    ])
.then(([dahlem, level]) => {
    const camera = new Camera();
    window.camera = camera
    
    dahlem.pos.set(64, 64);
    
    //Shows hit boxes:
    level.comp.layers.push(createCollisionLayer(level));
    
    level.entities.add(dahlem);
    
    const input = setupKeyboard(dahlem);

    input.listenTo(window);
    
     ['mousedown', 'mousemove'].forEach(eventName => {
 -        canvas.addEventListener(eventName, event => {
 -            if (event.buttons === 1) {
 -             dahlem.vel.set(0, 0);
 -             dahlem.pos.set(
                 event.offsetX + camera.pos.x,
                 event.offsetY + camera.pos.y);   
 -            }
 -        });
 -    });
    
    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
            level.update(deltaTime);
            level.comp.draw(context, camera); 
    }
    
    timer.start();
});
