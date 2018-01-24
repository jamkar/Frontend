/********************  Constructor Function **********************/

//Constructor function declaration
function Employee(firstName, lastName, position, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.age = age;
}

//Constructor function call
var softDev = new Employee("Karen", "Jamalyan", "Senior Java Developer", 32);


/************  Function invoking using call()  **************************/

function Bicycle(size, gear, color, tirePressure) {
    this.size = size;
    this.gear = gear;
    this.color = color;
    this.tirePressure = tirePressure;
    this.inflateTire = function () {
        this.tirePressure += 10;
    }
}

var bicycle1 = new Bicycle(26, 7, "red", 20);
bicycle1.inflateTire();

var mechanic = {};
mechanic.inflateTire = bicycle1.inflateTire;

// mechanic.inflateTire();
mechanic.inflateTire.call(bicycle1);


/********************  Prototypes  ***********************/

function Car(model) {
    this.model = model;
}

Car.prototype.drive = function () {
    console.log("Driving: " + this.model);
};

var someCar = new Car("Mustang");
someCar.drive();

console.log( someCar.__proto__ === Car.prototype );



// Object() function

var obj1 = {};
var obj2 = Object();

console.log( obj2.__proto__ === Object.prototype );
console.log( obj1.__proto__ === Object.prototype );


/***************    Inheritance   ***********************/

//Parent "Class"
function CelestialBody(name, size) {
    this.name = name;
    this.size = size;
    // this.getSize = function () {
    //     console.log(this.name + "'s size is: " + this.size);
    // }
}
//Declaring prototype's function
CelestialBody.prototype.getSize = function () {
    console.log(this.name + "'s size is: " + this.size);
};


//Child "Class"
function Planet(name, size, spinSpeed) {
    this.name = name;
    this.size = size;
    this.spinSpeed = spinSpeed;
}
//Inheriting by prototypes
Planet.prototype = CelestialBody.prototype;

var earth = new Planet("Earth", 125, 365);
console.log(earth);
