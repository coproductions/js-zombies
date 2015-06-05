/**
 * Class => Item(name)
 * -----------------------------
 * Creates an item.
 *
 * @name Item
 * @param {string} name     The item's name.
 * @property {string} name
 */
function Item(name){
  this.name = name;
}

function Weapon(name,damage){
  Item.call(this,name);
  this.damage = damage;
}

Weapon.prototype = Object.create(Item.prototype,{constructor:{value:Item}});

/**
 * Class => Weapon(name, damage)
 * -----------------------------
 * Creates a weapon item.
 * Weapon items can be equipped for use in battle.
 *
 * The Weapon class constructor will call
 *   the super class (Item) constructor
 *   while passing in the 1 Item constructor param
 *
 * @name Weapon
 * @param {string} name     The weapon's name.
 * @param {number} damage   The weapon's damage.
 * @property {number} damage
 */


/**
 * Weapon Extends Item Class
 * -----------------------------
 */


function Food(name,energy){
  Item.call(this,name);
  this.energy = energy;
}
Food.prototype = Object.create(Item.prototype,{constructor:{value:Item}});
/**
 * Class => Food(name, energy)
 * -----------------------------
 * Creates a food item.
 * Food items give energy, restoring health to the player.
 *
 * The Food class constructor will call
 *   the super class (Item) constructor
 *   while passing in the 1 Item constructor param
 *
 * @name Food
 * @param {string} name       The food's name.
 * @param {number} energy     The energy the food provides.
 * @property {number} energy
 */


/**
 * Food Extends Item Class
 * -----------------------------
 */


function Player(name,health,strength,speed){
  this.name = name;
  this._pack = [];
  this._maxHealth = health;
  this.health = health;
  this.strength = strength;
  this.speed = speed;
  this.isAlive = true;
  this.equipped = false;
  this.getPack = function(){return this._pack;}
  this.getMaxHealth = function(){return this._maxHealth;}
  this.checkPack = function(){
    console.log(this.getPack().toString());
  }
  this.takeItem = function(item){
    if(this.getPack().length <= 2){
      this._pack.push(item);
      console.log(this.name + ' took a '+item);
      return true;
    } else return false;
  }
  this.discardItem = function(item){
    if(this.getPack().indexOf(item) >= 0){
      this.getPack().splice(this.getPack().indexOf(item),1);
      console.log(this.name+' dicarded a '+item);
      return true;
    } else{
        console.log('Nothing was discarded since '+ item +' could not be found.');
        return false;
    }
  }
  this.equip = function(item){
    if(item instanceof Weapon && this.getPack().indexOf(item) >= 0){
      if(this.equipped){
        this.getPack().splice(this.getPack().indexOf(item),1,this.equipped);
        this.equipped = item;
      } else {
        this.getPack().splice(this.getPack().indexOf(item),1);
        this.equipped = item;
      }
    }
  }
  this.eat = function(food){
    if(food instanceof Food && this.getPack().indexOf(food) >= 0){
      this._pack.splice(this.getPack().indexOf(food),1);
      if(this.health+food.energy <= this.getMaxHealth() ){
        this.health += food.energy;
      } else this.health = this.getMaxHealth();
    }
  }
  this.useItem = function(item){
    if(item instanceof Food){
      this.eat(item);
    } else if(item instanceof Weapon){
      this.equip(item);
    }
  }
  this.equippedWith = function(){
    if(this.equipped){
      console.log(this.name +' is equipped with a '+this.equipped);
      return this.equipped.name;
    } else{
      console.log(this.name+' is not equipped');
      return this.equipped;
    }
  }
}

function Zombie(health, strength, speed){
  this.name = Zombie;
  this._maxHealth = health;
  this.health = health;
  this.strength = strength;
  this.speed = speed;
  this.isAlive = true;
}



/**
 * Class => Zombie(health, strength, speed)
 * -----------------------------
 * Creates a normal zombie.
 *
 * @name Zombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 * @private {number} maxHealth      Default value should be set to `health`.
 * @property {number} health
 * @property {number} strength
 * @property {number} speed
 * @property {boolean} isAlive      Default value should be `true`.
 */

function FastZombie(health, strength, speed){
  Zombie.call(this,health, strength, speed);
  this.name = 'FastZombie';
}

FastZombie.prototype = Object.create(Zombie.prototype,{constructor:{value:Zombie}});

/**
 * Class => FastZombie(health, strength, speed)
 * -----------------------------
 * Creates a fast zombie.
 *
 * The FastZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name FastZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * FastZombie Extends Zombie Class
 * -----------------------------
 */

function StrongZombie(health, strength, speed){
  Zombie.call(this,health,strength,speed);
}
StrongZombie.prototype = Object.create(Zombie.prototype,{constructor:{value:Zombie}})


/**
 * Class => StrongZombie(health, strength, speed)
 * -----------------------------
 * Creates a strong zombie.
 *
 * The StrongZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name StrongZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * StrongZombie Extends Zombie Class
 * -----------------------------
 */

function RangedZombie(health, strength, speed){
  Zombie.call(this,health,strength,speed);
}
RangedZombie.prototype = Object.create(Zombie.prototype,{constructor:{value:Zombie}})


/**
 * Class => RangedZombie(health, strength, speed)
 * -----------------------------
 * Creates a ranged zombie.
 *
 * The RangedZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name RangedZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */

function StrongZombie(health, strength, speed){
  Zombie.call(this,health,strength,speed);
}
StrongZombie.prototype = Object.create(Zombie.prototype,{constructor:{value:Zombie}})

/**
 * StrongZombie Extends Zombie Class
 * -----------------------------
 */

function ExplodingZombie(health, strength, speed){
  Zombie.call(this,health,strength,speed);
}
ExplodingZombie.prototype = Object.create(Zombie.prototype,{constructor:{value:Zombie}})

/**
 * Class => ExplodingZombie(health, strength, speed)
 * -----------------------------
 * Creates an exploding zombie.
 *
 * The ExplodingZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name ExplodingZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * ExplodingZombie Extends Zombie Class
 * -----------------------------
 */




/**
 * Sample run.
 * Feel free to edit this and check your game logic.
 */
function runGame() {
  var player = new Player("Joan", 500, 30, 70);
  var zombie = new Zombie(40, 50, 20);
  var charger = new FastZombie(175, 25, 60);
  var tank = new StrongZombie(250, 100, 15);
  var spitter = new RangedZombie(150, 20, 20);
  var boomer = new ExplodingZombie(50, 15, 10);

  var shovel = new Weapon("shovel", 15);
  var sandwich = new Food("sandwich", 30);
  var chainsaw = new Weapon("chainsaw", 25);

  player.takeItem(shovel);
  player.takeItem(sandwich);
  player.takeItem(chainsaw);
  player.discardItem(new Weapon("scythe", 21));
  player.discardItem(shovel);
  player.checkPack();
  player.takeItem(shovel);
  player.checkPack();

  player.equippedWith();
  player.useItem(chainsaw);
  player.equippedWith();
  player.checkPack();

  player.useItem(shovel);
  player.equippedWith();
  player.checkPack();

  player.health = 487;
  console.log("Before health: " + player.health);
  player.useItem(sandwich);
  console.log("After health: " + player.health);
  player.checkPack();
}
