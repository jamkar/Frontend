// function Person() {
//     //this.age = 0;
//     var that = this;
//     that.age = 0;
//
//     setInterval(function () {
//         console.log(this);
//         console.log(that);
//         that.age++;
//     }, 1000);
// }

function Person() {
    this.age = 0;

    setInterval(() => {
        // console.log(this);
        this.age++;
    }, 1000);
}

var p = new Person();
console.log(p.age);