let robin, img_sprite_character;
let clickTime = -1000;
let characterWidth = 150;
let characterHeight = 139;
let sprite_sheet, sprite_animation;
let character_sprite;
let fart, grunt;
let objects, trees, flyers, turds, targets;
let score = 0;
let readyButton, loseButton;
let ready = false;

function preload() {
    sprite_sheet = loadSpriteSheet('assets/img/sprite_sheet.png',132,122,9);
    sprite_animation = loadAnimation(sprite_sheet);
    spriteImg = loadImage("assets/img/spriteImg.png");
    //mySound = loadSound("assets/audio/sound.wav");
}

function setup() {
    let myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent("canvas");
    objects = new Group();
    character = new Character();
    img_sprite_character = new Img_Sprite();

    //sound.setVolume(0.1);
    objects.add(object_sprite);

    if ($(window).width() >= 960) {
        readyButton = createButton('Play!', 'Play');
        readyButton.position(width / 2 - 75, height / 2 + 110);
    }
}

function draw() {
    clear();
    if (!ready){
        readyButton.mousePressed(function () {
            removeMenu();
        });
    }
    else {
        drawSprite(img_sprite_character);
        objects.draw();
        drawSprite(character);
        //console.log("Frame Rate: " + frameRate())
    }
}


function keyPressed() {
    if (key === ' ') {
        if (millis() - clickTime >= 1000) {
            turd = new Turd(robin_sprite.position.x - 45, robin_sprite.position.y + 70);
            clickTime = millis();
            //fart.play();
        }
    }
}

function gameOver() {
    robin_sprite.mirrorY(-1);
    robin_sprite.attractionPoint(1, robin_sprite.position.x, height * 2);
    //robin_sprite.position.x = width + 600;
    $("#logo-font").show();
    $("div#donate").show();
    $("#menu").show();
    lose_sprite.position.x = width / 2;
    loseButton = createButton('Main Menu', 'menu-button');
    loseButton.position(width / 2 - 57, height / 2 + 100);
    loseButton.mousePressed(function () {
        location.reload();
    });
}

function removeMenu() {
    $("#logo-font").hide();
    $("#menu").hide();
    $("div#donate").hide();
    keyboard_sprite.remove();
    readyButton.remove();
    ready = true;
}
