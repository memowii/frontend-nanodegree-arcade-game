var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.x = -125;
    this.y = this.getPosition();
    this.speed = this.getSpeed();
};

Enemy.prototype.getPosition = function () {
    var enemyPositions = [58, 143, 227],
        randomPos = Math.floor(Math.random() * 3);

    return enemyPositions[randomPos];
};

Enemy.prototype.getSpeed = function () {
    min = Math.ceil(200);
    max = Math.floor(450);

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};