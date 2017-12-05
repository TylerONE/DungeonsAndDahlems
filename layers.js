export function createBackgroundLayer(backgrounds, sprites) {
    const buffer = document.createElement('canvas');
    buffer.width = 1500;
    buffer.height = 500;
    
    backgrounds.forEach(background => {
        drawBackground(background, buffer.getContext('2d'), sprites);
      });
    
    return function drawBackgroundLayer(context) {
      context.drawImage(buffer, 0, 0);
    };
}
