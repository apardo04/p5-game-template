function Character() {
    character_sprite = createSprite();
    character_sprite.addAnimation("default", character_animation);
    character_sprite.height = characterHeight;
    character_sprite.width = characterWidth;
    character_sprite.position.x = characterWidth/2;
    character_sprite.position.y = characterHeight/2;
    character_sprite.setCollider("circle",0,0,62);
    this.poweredUp = false;
    //character_sprite.debug = true;
}

character.prototype.keyPressed = function() {
    if (character_sprite.position.x - character_sprite.width / 2 > 0) {
        if (keyIsDown(LEFT_ARROW))
            character_sprite.position.x += -7;
    }
    if (character_sprite.position.x + character_sprite.width / 2 < width) {
        if (keyIsDown(RIGHT_ARROW))
            character_sprite.position.x += 7;
    }
    if (character_sprite.position.y - character_sprite.height / 2 > 0) {
        if (keyIsDown(UP_ARROW))
            character_sprite.position.y += -7;
    }
    if (character_sprite.position.y + character_sprite.height / 2 + 55 < height) {
        if (keyIsDown(DOWN_ARROW))
            character_sprite.position.y += 7;
    }
};

character.prototype.powerUp = function() {
    this.poweredUp = true;
    console.log("poweredUp = " + this.poweredUp)
};