import Compositor from './gameBase/Compositor.js';

export default class Level{
    constructor() {
      this.comp = new Compositor();
      this.entities = new Set();
    }
}
