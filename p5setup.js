function preload() {
  fireball = loadImage("Bilder/Feuerball.svg");
  fireball_skillbar = loadImage("Bilder/Feuerball_Skillbar.svg");
  bounce_fireball_skillbar = loadImage("Bilder/Bounce_Feuerball_Skillbar.svg");
  trippelFireball_skillbar = loadImage("Bilder/DreifachFeuerball_Skillbar.svg");
  firehell_skillbar = loadImage("Bilder/Feuerhoelle_Skillbar.svg");
  doorClosed = loadImage("Bilder/doorClosed.svg");
  doorOpen = loadImage("Bilder/doorOpen.svg");
  enemySlime = loadImage("Bilder/enemySchleim.svg");
  enemySlimeDead = loadImage("Bilder/enemySchleimTod.svg");
  enemySlimeSpawning = loadImage("Bilder/enemySchleimSpawning.svg");
  healingPotion = loadImage("Bilder/healingPotion.svg");
  manaItem = loadImage("Bilder/Manapoint.svg");
  lifeItem = loadImage("Bilder/Lifepoint.svg");
  startButton = loadImage("Bilder/buttonStart.png");
  buttonPause = loadImage("Bilder/buttonPause.png");
  buttonWeiter = loadImage("Bilder/buttonWeiter.svg");
  buttonOptionen = loadImage("Bilder/buttonOptionen.png");
  buttonTasten = loadImage("Bilder/buttonTasten.svg");
  buttonBack = loadImage("Bilder/buttonBack.png");
  buttonRestart = loadImage("Bilder/buttonNeuStart.png");
  buttonTutorialControlls_Closed = loadImage(
    "Bilder/Tutorial_Button_Steuerung_Zu.png"
  );
  buttonTutorialControlls_Open = loadImage(
    "Bilder/Tutorial_Button_Steuerung_Offen.png"
  );
  buttonTutorialEnemys_Closed = loadImage(
    "Bilder/Tutorial_Button_Enemys_Zu.png"
  );
  buttonTutorialEnemys_Open = loadImage(
    "Bilder/Tutorial_Button_Enemys_Offen.png"
  );
  buttonTutorialRunen_Closed = loadImage("Bilder/Tutorial_Button_Runen_Zu.png");
  buttonTutorialRunen_Open = loadImage(
    "Bilder/Tutorial_Button_Runen_Offen.png"
  );
  mageFire = loadImage("Bilder/mageFire.svg");
  mageFire_shoot1 = loadImage("Bilder/mageFire_shoot.svg");
  mageFireShield = loadImage("Bilder/mageFireShield.svg");
  enemyFireMage = loadImage("Bilder/enemyFireMage.svg");
  enemyFireMageAttack = loadImage("Bilder/enemyFireMageAttack.svg");
  enemyFireMageDead = loadImage("Bilder/enemyFireMageDead.svg");
  enemyFireball = loadImage("Bilder/enemyFireball.svg");
  roomRectangle = loadImage("Bilder/roomRectangle.png");
  roomCircle = loadImage("Bilder/roomCircle.svg");
  scrollTrippleFireball = loadImage("Bilder/ScrollTrippleFireball.svg");
  magicShield_Skillbar = loadImage("Bilder/MagicShield_Skillbar.svg");
  runeMaxMana = loadImage("Bilder/runeMana.png");
  runenCenter = loadImage("Bilder/runenMitte.png");
  runeMaxHp = loadImage("Bilder/runeMaxHp.png");
  slimeKing = loadImage("Bilder/SlimeKing.png");
  slimeKing_dead = loadImage("Bilder/SlimeKing_Dead.png");
  slimeKingAttack = loadImage("Bilder/SlimeKingAttack.png");
  bulletSlimeKing = loadImage("Bilder/SlimeKingBullet.svg");
  slimeKingShadow = loadImage("Bilder/SlimeKingShadow.svg");
  slimeArea = loadImage("Bilder/SlimeArea.svg");
  inventory = loadImage("Bilder/inventory.svg");
  startRoom = loadImage("Bilder/StartRaum.png");
  circleRoom = loadImage("Bilder/RunderRaum.png");
  enemySwordKnight = loadImage("Bilder/SchwertRitter.png");
  enemySwordKnightAttack = loadImage("Bilder/SchwertRitter_Attack.png");
  castelBackground = loadImage("Bilder/castel_Background.png");
  gameOver_Pic = loadImage("Bilder/GameOver.png");
  win_Pic = loadImage("Bilder/Gewonnen.png");

  soundFormats("mp3", "ogg");
  //http://soundbible.com/tags-fireball.html
  soundFireball = loadSound("Musik/Flame Arrow-SoundBible.com-618067908.mp3");
  soundTrippelFireball = loadSound(
    "Musik/Catapult-SoundBible.com-829548288.mp3"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  doorClosed.loadPixels();
  doorOpen.loadPixels();
  fireball.loadPixels();
  enemySlime.loadPixels();
  enemySlimeDead.loadPixels();
  enemySlimeSpawning.loadPixels();
  healingPotion.loadPixels();
  fireball_skillbar.loadPixels();
  trippelFireball_skillbar.loadPixels();
  firehell_skillbar.loadPixels();
  manaItem.loadPixels();
  lifeItem.loadPixels();
  startButton.loadPixels();
  buttonOptionen.loadPixels();
  buttonTasten.loadPixels();
  buttonBack.loadPixels();
  mageFire.loadPixels();
  mageFire_shoot1.loadPixels();
  mageFireShield.loadPixels();
  enemyFireMage.loadPixels();
  enemyFireMageAttack.loadPixels();
  enemyFireMageDead.loadPixels();
  enemyFireball.loadPixels();
  roomRectangle.loadPixels();
  scrollTrippleFireball.loadPixels();
  runeMaxMana.loadPixels();
  //runenCenter.loadPixels();
  runeMaxHp.loadPixels();
  slimeKing.loadPixels();
  slimeKingAttack.loadPixels();
  startRoom.loadPixels();
  circleRoom.loadPixels();
  enemySwordKnight.loadPixels();
  enemySwordKnightAttack.loadPixels();
}

window.addEventListener("resize", function() {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
