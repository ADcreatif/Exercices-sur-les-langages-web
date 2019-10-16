"use strict";

/**
 * Class Creation with ES6, we have Robot and SuperRobot wich extends Robot
 */
class Robot {

    // constructor
    constructor() {

        //property
        this.size = 12;
    }

    // method
    walk() {

    }
}

class SuperRobot extends Robot {

    constructor() {
        // we need to call the parents constructor with super or it'll break access to the class Robot
        super();

        // this is a constructor extention, adding fuel for fly
        this.fuel = 32;
    }

    fly() {

    }

}

////////////////////////////////////////////////////////////
// instance of SuperRobot
var r2d2 = new SuperRobot();
r2d2.fly();