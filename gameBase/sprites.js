import {loadImage} from './gameBase/loaders.js';
import SpriteSheet from './gameBase/SpriteSheet.js';

export function loadDahlemSprite() {
    return loadImage('gameBase/Character.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 32, 32);
        sprites.define('idle', 259, 1, 16, 32);
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
