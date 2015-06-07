var chai = require('chai');
var should = chai.should;
var expect = chai.expect;
chai.should();
var zombies = require('../zombies.js');



describe('Item', function () {
  describe('constructor', function () {
    it('should create a new Item with a Name', function () {
      var item = new zombies.Item('Water Bottle');
      item.should.have.property('name');
    });

  });
});

describe('Weapon', function () {
  describe('constructor', function () {
    var weapon = new zombies.Weapon('Gun');
    it('should create a new Item with a Name', function () {
      weapon.should.have.property('name');
    });

    it('should have a damage property', function(){
      weapon.should.have.property('damage');
    });
    it('should be an instance of Item', function(){
      weapon.should.be.an.instanceof(zombies.Item);
    });

  });
});

describe('Food', function () {
  describe('constructor', function () {
    var food = new zombies.Food('Gun');
    it('should create a new Item with a Name', function () {
      food.should.have.property('name');
    });

    it('should have a energy property', function(){
      food.should.have.property('energy');
    });
    it('should be an instance of Item', function(){
      food.should.be.an.instanceof(zombies.Item);
    });

  });
});

describe('Player', function () {
  var player;
  var hammer;
  describe('constructor', function () {
    beforeEach(function () {
       player = new zombies.Player('Jon',100,25,55);
       hammer = new zombies.Weapon('hammer',15);
    });

    it('should create a new Item with a Name', function () {
      player.should.have.property('name');
    });

    it('should have a maxHealth property', function(){
      player.should.have.property('_maxHealth');
    });
    it('should have a method of take item', function(){
      expect(player.takeItem).to.be.a('function');;
    });
    it('shouldininien', function(){

      player.takeItem(hammer);
      expect(player.getPack()[0]).to.equal(hammer);
    })
    it('should have a function that discardes an item', function(){
      // var newItem = new zombies.Item('bottle');
      player.takeItem(hammer);
      player.discardItem(hammer).should.equal(true);
      player.getPack().should.deep.equal([])
    })
    it('should be able to use an item', function () {
      var banana = new zombies.Food('banana',23);
      player.takeItem(banana);
      player.health = 50;
      player.useItem(banana);

      var healthval = player.health;
      console.log(healthval);
      expect(player.health).to.equal(73);

    });
    it('should  be able to equip an item from its pack', function () {
        player.takeItem(hammer);
        player.equip(hammer);
        //player.discardItem(hammer);
        console.log('what is hammer',hammer)
        player.equipped.should.equal(hammer);
        console.log('what is equipped',player.equipped)

    });
      it('should only be able to equip an item from its pack', function () {
        player.takeItem(hammer);
        player.equipped = false;
        player.discardItem(hammer);
        player.equipped.should.equal(false);
        console.log(player.equipped)
    });

  });
});

describe('Zombie', function(){
  var franz;
  var hammer;
  beforeEach(function(){
    franz = new zombies.Zombie(23,43,12);
    hammer = new zombies.Weapon(hammer,15);
  });
  it('should be alive', function(){
    franz.isAlive.should.be.true;
  })
});

