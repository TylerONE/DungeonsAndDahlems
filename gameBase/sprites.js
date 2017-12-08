import {loadImage} from './loaders.js';
import SpriteSheet from './SpriteSheet.js';

export function loadDahlemSprite() {
    return loadImage('gameBase/Character.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 64, 64);
        sprites.define('idle', 257, 1, 17, 32);
        return sprites;
    });
}

export function loadBackgroundSprites() {
    return loadImage('gameBase/tileset.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 32, 32);
        sprites.defineTile('upperGround', 0, 0);
        sprites.defineTile('lowerGround', 0, 1);
        sprites.defineTile('sky', 2.92, 22.89);
        return sprites;
    });
}
