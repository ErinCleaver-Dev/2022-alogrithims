//refernce types

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

object.value = 15;

/* 
    *  object 1 is equal to object 2 becase it is a reference to the other type
    *  object 1 is not equal to object 3 becase it is not a reference to the other type
    * Reference types in javascript are created by the programmer
*/

/* context 
    * context vs Scope 
    * Scope is defined by {}
*/

// to create a new value for this object

const object4 = {
    a: function() {
        console.log(this);
    }
}

// Instantiation is when you crete a copy of the object and reuse the code.  
/*
  When you needs to make multiple copies in object.
*/

class Player {
    constructor(name, type, playerID, id) {
        this.name = name;
        this.type = type;
        this.playerID = playerID
        this.id = id;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type, playerID, id) {
        super(name, type)
    }
    play() {
        console.log(`WEEEEEE I am ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Magic');

wizard1.play();
wizard1.introduce();