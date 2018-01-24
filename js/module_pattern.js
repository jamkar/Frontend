function createPerson() {
    var firstName = "Karen";
    var lastName = "Jamalyan";

    var returnObj = {
        getFirstName: function () {
            return firstName;
        },
        getLastName: function () {
            return lastName;
        },
        setFirstName: function (name) {
            firstName = name;
        },
        setLastName: function (name) {
            lastName = name
        }
    };
    return returnObj;
}

var person = createPerson();

console.log(person.getFirstName());
person.setFirstName("dfjdjg");
console.log(person.getFirstName());


var carr = (function() {
    var manufacturer = "Ford";
    var model = "Mustang";
    var power =  520;

    return {
        getManufacturer: function () {
            return manufacturer;
        },
        getModel: function () {
            return model;
        },
        getPower: function () {
            return power;
        },
        setManufacturer: function (man) {
            manufacturer = man;
        },
        setModel: function (mod) {
            model = mod;
        },
        setPower: function (pow) {
            power = pow;
        }
    }
})();

// var car = createCar();

console.log("Manufacturer: " + carr.getManufacturer());
carr.setManufacturer("Dodge");
console.log("Manufacturer: " + carr.getManufacturer());