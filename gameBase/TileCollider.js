import TileResolver from './TileResolver.js';

export default class TileCollider {
  constructor(tileMatrix) {
    this.tiles = new TileResolver(tileMatrix);
  }
  
  checkY(entity) {
    const match = this.tiles.matchByPosition(entity.pos.x, entity.pos.y);
    if (!match) {
     return; 
    }
    
    if (match.tile.name !== 'upperground' && match.tile.name !== 'lowerground') {
      return;
    }
    
    if (entity.vel.y > 0) {
      if (entity.pos.y > match.y1) {
        entity.pos.y = match.y1;
        entity.vel.y = 0;
      }
    }
  }
  
  test(entity){
    this.checkY(entity);
  }
}
