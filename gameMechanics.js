import {loadLevel} from './loaders.js';
import {loadDahlemSprite, loadBackgroundSprites} from './sprites.js';

function drawBackground(background, context, sprites) {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        
    for(let x = x1; x < x2; ++x) {
        for(let y = y1; y < y2; ++y){
            sprites.drawTile(background.tile, context, x, y);  
        }
    }
    });
}

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');
    
class Compositor {
        constructor(){
         this.layers = [];  
        }
    
    draw(context); {
        this.layers.forEach(layer => {
            layer(context);
        });
    }
}

function createBackgroundLayer(backgrounds, sprites) {
    const buffer = document.createElement('canvas');
    buffer.width = 256; //1500px
    buffer.height = 240; //500px
    
    backgrounds.forEach(background => {
        drawBackground(background, backgroundBuffer.getContext('2d'), sprites);
      });
    
    return function drawBackgroundLayer(context) {
      context.drawImage(backgroundBuffer, 0, 0);
    };
}

Promise.all([
    loadDahlemSprite(),
    loadBackgroundSprites(),
    loadLevel('level1'),
    ])
.then(([dahlemSprite, sprites, level]) => {
    const comp = new Compositor();
    
    const backgroundLayer = createBackgroundLayer(level.backgrounds, sprites);
    comp.layers.push(backgroundLayer);
    
    
    const pos = {
        x: 64,
        y:64,
    };
    
    function update() {
        comp.draw(context);
        dahlemSprite.draw('idle', context, pos.x, pos.y);
        pos.x += 2;
        pos.y += 2;
        requestAnimationFrame(update);
    }
    
    update();
});
