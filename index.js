const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const animate = window.requestAnimationFrame;

// base class for TitleMenus;
class TitleMenu {
  constructor(title, font, color, height){
    this.title = title;
    this.height = height;
    this.font = font;
    this.color = color;
  }
}

// base class for TitleMenu items;
class TitleMenuItem {
  constructor(title, color, font, height){
    this.title = title;
    this.color = color;
    this.font = font;
    this.height = height;
  }
}

TitleMenu.prototype.render = function (width, height) {
  ctx.fillStyle = this.color;
  ctx.font = `${this.height} ${this.font}`;
  ctx.fillText(`${this.title}`, width, height);
};

TitleMenuItem.prototype.render = function (width, height) {
  ctx.fillStyle = this.color;
  ctx.font = `${this.height} ${this.font}`;
  ctx.fillText(`${this.title}`, width, height);
};


const newGame = new TitleMenuItem('New Game', 'white', 'Cursive', '30px');
const loadGame = new TitleMenuItem('Load Game', 'white', 'Cursive', '30px');
const startMenu = new TitleMenu('A Simple RPG', 'white', 'Cursive', '50px');

function render(){
  startGame();
  startMenu.render(250, 200);
  newGame.render(330, 350);
  loadGame.render(330, 400);
}

function update(){

}


function startGame(){
  // background color
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  // title menu
}

function step(){
  render();
  animate(step);
}
