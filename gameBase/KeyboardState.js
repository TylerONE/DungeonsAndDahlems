export default class KeyboardState {
    constructor() {
        // holds the current state of given key
        this.keyStates = new Map();
        
        // holds the callback functions for a key code
        this.keyMap = new Map();
    }
    
    addMapping(keyCode, callback) {
        this.keyMap.set(keyCode, callback);
    }
      
      handleEvent(event) {
        const {keyCode} = event;
        
        if(!this.keyMap.has(keyCode)) {
            //did not have key mapped
            return false;
          }
          
          event.preventDefault();
      }
}
