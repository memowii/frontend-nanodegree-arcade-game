var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.x = this.getXPosition();
    this.y = this.getYPosition();
    this.speed = this.getSpeed();
};

Enemy.prototype.getYPosition = function () {
    var enemyPositions = [58, 143, 227],
        randomPos      = getRandomIntInclusive(0, 2);

    return enemyPositions[randomPos];
};

Enemy.prototype.getXPosition = function () {
    return getRandomIntInclusive(-250, -125);
};

Enemy.prototype.getSpeed = function () {
    return getRandomIntInclusive(200, 450);
};

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};