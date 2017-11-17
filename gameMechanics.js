function loadImage(url){
 return new Promise(resolve => {
     const image = new Image();
     image.addEventListener('load', () =>{
         resolve(image);
     });
     image.src = url;
 });
}

cont canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

loadImage('/gameBase/tileset.png')
.the(image => {
    context.drawImage(image,0, 0);
});
