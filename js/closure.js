function closure() {
    var count = 0;
    function incrAndGet() {
        return ++count;
    }
    return incrAndGet;
}

var incrAndGet = closure();

console.log("Count: " + incrAndGet());
console.log("Count: " + incrAndGet());
console.log("Count: " + incrAndGet());