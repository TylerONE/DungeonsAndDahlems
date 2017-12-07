 export function createDahlem() {
    const dahlem = new Entity();
    dahlem.pos.set(64, 180);
    dahlem.vel.set(2, -10);
    
    dahlem.draw = function drawDahlem(context) {
        dahlemSprite.draw('idle', context, this.pos.x, this.pos.y);
    }
    
    dahlem.update = function updateDahlem() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }
    return dahlem;
 }
