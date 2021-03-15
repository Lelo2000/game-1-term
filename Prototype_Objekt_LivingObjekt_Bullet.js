let Bullet = function(x, y, a, type, maxHp, img, size, speed, damage) {
  LivingObject.call(this, maxHp);
  this.x = x;
  this.y = y;
  this.rot = a;
  this.type = type;
  this.img = img;
  this.sizeX = size * 2;
  this.sizeY = size;
  this.shape = 1;
  this.speed = speed;
  this.damage = damage;
  this.deletion = false;
};
Bullet.prototype = Object.create(LivingObject.prototype);
Bullet.prototype.onHitWall = function() {
  this.deletion = true;
};
let Fireballbullet = function(x, y, a, type, damage) {
  Bullet.call(this, x, y, a, type, 1, [], 16, 12, damage);
  if (type === 0) {
    this.img = [fireball];
  } else {
    this.img = [enemyFireball];
  }
};
Fireballbullet.prototype = Object.create(Bullet.prototype);

let BounceBullet = function(x, y, a, damage) {
  Bullet.call(this, x, y, a, 2, 1, [fireball], 12, 12, damage);
};
BounceBullet.prototype = Object.create(Bullet.prototype);
BounceBullet.prototype.onHitWall = function() {
  let norm = [0, 0];
  if (room.shape === 1) {
    if (this.x + this.sizeX >= width / 2 + room.sizeX / 2) {
      norm[0] = -1;
    } else if (this.x - this.sizeX <= width / 2 - room.sizeX / 2) {
      norm[0] = 1;
    }
    if (this.y + this.sizeY >= height / 2 + room.sizeY / 2) {
      norm[1] = -1;
    } else if (this.y - this.sizeY <= height / 2 - room.sizeY / 2) {
      norm[1] = 1;
    }
  } else if (room.shape === 0) {
    norm = [this.x - width / 2, this.y - height / 2];
  }
  let vec = [cos(this.rot), sin(this.rot)];
  let newVec = deflect(vec, norm);
  this.rot = vecToAngle(newVec);
  this.move(this.rot);
  if (
    inRoom(this.x + this.sizeX / 2, this.y) === false ||
    inRoom(this.x - this.sizeX / 2, this.y) === false ||
    inRoom(this.x, this.y + this.sizeY / 2) === false ||
    inRoom(this.x, this.y - this.sizeY / 2) === false
  ) {
    this.deletion = true;
  }
  if (this.sizeX < 100) {
    this.sizeX += 4;
    this.sizeY += 2;
    this.damage = this.damage + 3;
  }
};

let BulletSlimeKing = function(x, y, a, damage) {
  Bullet.call(this, x, y, a, -2, 1, [bulletSlimeKing], 20, 8, damage);
};

BulletSlimeKing.prototype = Object.create(Bullet.prototype);
BulletSlimeKing.prototype.onHitWall = function() {
  if (rndOutcome(30)) {
    room.enemys.push(new Slime(this.x, this.y, 2));
  }
  this.deletion = true;
};

function bulletHandler() {
  for (let i in bullets) {
    bullets[i].draw();
    bullets[i].move(bullets[i].rot);
  }
  for (let i in bullets) {
    if (
      inRoom(bullets[i].x + bullets[i].sizeX / 2, bullets[i].y) === false ||
      inRoom(bullets[i].x - bullets[i].sizeX / 2, bullets[i].y) === false ||
      inRoom(bullets[i].x, bullets[i].y + bullets[i].sizeY / 2) === false ||
      inRoom(bullets[i].x, bullets[i].y - bullets[i].sizeY / 2) === false
    ) {
      bullets[i].onHitWall();
      if (bullets[i].deletion) bullets.splice(i, 1);
    }
  }
}
