// Constants
var WIDTH  = 400;
var HEIGHT = 300;

// Global variables
var game = new Phaser.Game(WIDTH, HEIGHT,
                           Phaser.AUTO, '',
                           { preload: preload, create: create, update: update });
var demarrer;

// Preload
function preload() {
    game.load.spritesheet('demarrer', 'images/demarrer.png', 300, 70);
}

// Create
function create() {
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.refresh();
    demarrer = game.add.sprite(WIDTH / 2, HEIGHT / 2, 'demarrer');
    demarrer.anchor.setTo(0.5, 0.5);
    demarrer.inputEnabled = true;
    demarrer.events.onInputDown.add(gofull, this);
    demarrer.events.onInputOver.add(over, this);
    demarrer.events.onInputOut.add(out, this);
}

// Events
function gofull(sprite) {
    game.scale.startFullScreen(false);
    sprite.kill();
}

function over(sprite) {
    sprite.frame = 1;
}

function out(sprite) {
    sprite.frame = 0;
}

// Update
function update() {
}

