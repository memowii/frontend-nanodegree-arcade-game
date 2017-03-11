// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 200; // 100 + 100*1
    this.y = 380; // 220 + 80*2
};

Player.prototype.update = function (dt) {

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (keycode) {

    if (keycode === 'left' && !(this.x - 100 < 0)) {
        console.log('entro left 1');
        this.x += -100;
    }

    else if (keycode === 'right' && this.x + 100 < 505 - 101) {
        this.x += 100;
    }

    else  if (keycode === 'up') {
        if (!(this.y - 80 < 0)) {
            this.y += -80;
        } else {
            this.x = 200;
            this.y = 380;
        }
    }

    else if (keycode === 'down' && this.y + 80 < 606 - 171) {
            this.y += 80;
    }
};
