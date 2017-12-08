export function createBackgroundLayer(level, sprites) {
    const buffer = document.createElement('canvas');
    buffer.width = 1500;
    buffer.height = 500;
    
    const context = buffer.getContext('2d');
    
    level.tiles.forEach((column, x, y) => {
        sprites.drawTile(tile.name, context, x, y);                     
    });
    
    return function drawBackgroundLayer(context) {
      context.drawImage(buffer, 0, 0);
    };
}

export function createSpriteLayer(entities) {
    return function drawSpriteLayer(context) {
        entities.forEach(entity => {
        entity.draw(context);
    });
    }
}

