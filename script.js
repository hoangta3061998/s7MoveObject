/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left,right,bot, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  /*this.right = right;
  this.bot = bot;*/
  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px;bottom: '+this.bot+'px; right:'+this.right+'px;left:'+this.left+'px ;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }
  /*this.moveLeft = function () {
     this.right+=this.speed;
  }
  this.moveUp = function () {
     this.bot+=this.speed;
  }
  this.moveDown = function () {
    this.top+=this.speed;
  }*/
  this.setSpeed = function (speed) {
    this.speed = speed;
  }

}

var hero = new Hero('troll.png', 20, 30, 200);
hero.setSpeed(100);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();