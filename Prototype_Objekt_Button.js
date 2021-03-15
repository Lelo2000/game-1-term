let Button = function(x, y) {
  Obj.call(this);
  this.x = x;
  this.y = y;
  this.shape = 1;
  this.hoverTime = 0;
};
Button.prototype = Object.create(Obj.prototype);
Button.prototype.hover = function() {
  push();
  fill(255, 255, 255, this.hoverTime);
  noStroke();
  rect(
    this.x - this.sizeX / 2,
    this.y - this.sizeY / 2,
    this.sizeX,
    this.sizeY
  );
  pop();
  if (this.hoverTime < 100) {
    this.hoverTime = this.hoverTime + 15;
  }
};

let ButtonStart = function(x, y) {
  Button.call(this, x, y);
  this.sizeX = 130;
  this.sizeY = 65;
  this.img = [startButton];
};
ButtonStart.prototype = Object.create(Button.prototype);
ButtonStart.prototype.action = function() {
  switchMenue(Types.Menue.InGame);
};

let ButtonPause = function(x, y) {
  Button.call(this, x, y);
  this.sizeX = 90;
  this.sizeY = 30;
  this.img = [buttonPause];
};
ButtonPause.prototype = Object.create(Button.prototype);
ButtonPause.prototype.action = function() {
  switchMenue(Types.Menue.Pause);
};
let ButtonWeiter = function(x, y) {
  Button.call(this, x, y);
  this.sizeX = 130;
  this.sizeY = 65;
  this.img = [buttonWeiter];
};
ButtonWeiter.prototype = Object.create(Button.prototype);
ButtonWeiter.prototype.action = function() {
  switchMenue(Types.Menue.InGame);
};

let ButtonOptionen = function(x, y) {
  Button.call(this, x, y);
  this.sizeX = 130;
  this.sizeY = 65;
  this.img = [buttonOptionen];
};
ButtonOptionen.prototype = Object.create(Button.prototype);
ButtonOptionen.prototype.action = function() {
  switchMenue(Types.Menue.Optionen);
};

let ButtonOptionenTastenauswahl = function(x, y) {
  Button.call(this, x, y);
  this.sizeX = 20;
  this.sizeY = 20;
  this.img = [buttonTasten];
  this.isPressed = false;
  this.keyWhenPressed = 0;
};
ButtonOptionenTastenauswahl.prototype = Object.create(Button.prototype);
ButtonOptionenTastenauswahl.prototype.action = function() {
  this.isPressed = true;
  this.keyWhenPressed = keyCode;
};

let ButtonRuneSwitch = function(x, y, id) {
  Button.call(this, x, y);
  this.sizeX = 40;
  this.sizeY = 40;
  this.id = id;
};
ButtonRuneSwitch.prototype = Object.create(Button.prototype);
ButtonRuneSwitch.prototype.action = function() {
  if (mouseDrag.length > 0) {
    if (mouseDrag[0].isRune) {
      this.hover();
      if (player.runes[this.id] === undefined) {
        player.runes[this.id] = mouseDrag[0];
        mouseDrag = [];
      } else {
        let zwischenablage = mouseDrag[0];
        mouseDrag[0] = player.runes[this.id];
        player.runes[this.id] = zwischenablage;
      }
    }
  } else {
    if (player.runes[this.id] != undefined) {
      mouseDrag[0] = player.runes[this.id];
      delete player.runes[this.id];
    }
  }
};
ButtonRuneSwitch.prototype.draw = function() {
  if (player.runes[this.id] != undefined) {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(player.runes[this.id].rot);
    image(player.runes[this.id].img[0], 0, 0, 40, 40);
    pop();
  }
};
ButtonRuneSwitch.prototype.hover = function() {
  if (mouseDrag.length > 0) {
    if (mouseDrag[0].isRune) {
      switch (this.id) {
        case 1:
          mouseDrag[0].rot = PI / 4;
          break;
        case 2:
          mouseDrag[0].rot = PI / 2;
          break;
        case 3:
          mouseDrag[0].rot = (PI * 3) / 4;
          break;
        case 4:
          mouseDrag[0].rot = -PI;
          break;
        case 5:
          mouseDrag[0].rot = (-PI * 3) / 4;
          break;
        case 6:
          mouseDrag[0].rot = -PI / 2;
          break;
        case 7:
          mouseDrag[0].rot = (-PI * 1) / 4;
          break;
      }
    }
  }
};

let ButtonBack = function(x, y) {
  Button.call(this, x, y);
  this.sizeX = 90;
  this.sizeY = 30;
  this.img = [buttonBack];
};
ButtonBack.prototype = Object.create(Button.prototype);
ButtonBack.prototype.action = function() {
  switchMenue(menueHistory[menueHistory.length - 2]);
};

let ButtonRestart = function(x, y) {
  Button.call(this, x, y);
  this.sizeX = 130;
  this.sizeY = 65;
  this.img = [buttonRestart];
};
ButtonRestart.prototype = Object.create(Button.prototype);
ButtonRestart.prototype.action = function() {
  start = true;
  switchMenue(Types.Menue.Start);
};

let FormSwitchButton = function(x, y, img1, img2) {
  Button.call(this, x, y);
  (this.sizeX = 40), 40;
  this.states = [img1, img2];
  this.img = [img1.img, img2.img];
  this.sizeX = img1.sizeX;
  this.sizeY = img1.sizeY;
  this.state = 0;
};
FormSwitchButton.prototype = Object.create(Button.prototype);
FormSwitchButton.prototype.action = function() {
  if (this.state === 0) {
    this.state = 1;
  } else {
    this.state = 0;
  }
  this.sizeX = this.states[this.state].sizeX;
  this.sizeY = this.states[this.state].sizeY;
  this.skin = this.state;
};
FormSwitchButton.prototype.hover = function() {};

let TutorialButtonControlls = function(x, y) {
  FormSwitchButton.call(
    this,
    x,
    y,
    { img: buttonTutorialControlls_Closed, sizeX: 65, sizeY: 167 },
    { img: buttonTutorialControlls_Open, sizeX: 428, sizeY: 167 }
  );
};
TutorialButtonControlls.prototype = Object.create(FormSwitchButton.prototype);

let TutorialButtonEnemys = function(x, y) {
  FormSwitchButton.call(
    this,
    x,
    y,
    { img: buttonTutorialEnemys_Closed, sizeX: 65, sizeY: 167 },
    { img: buttonTutorialEnemys_Open, sizeX: 428, sizeY: 167 }
  );
};
TutorialButtonEnemys.prototype = Object.create(FormSwitchButton.prototype);

let TutorialButtonRunen = function(x, y) {
  FormSwitchButton.call(
    this,
    x,
    y,
    { img: buttonTutorialRunen_Closed, sizeX: 65, sizeY: 167 },
    { img: buttonTutorialRunen_Open, sizeX: 428, sizeY: 167 }
  );
};
TutorialButtonRunen.prototype = Object.create(FormSwitchButton.prototype);
