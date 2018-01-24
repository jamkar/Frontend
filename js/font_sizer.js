function sizerFactory(size) {
    return function() {
        document.body.style.fontSize = size + "px";
    }
}

var sizer12 = sizerFactory(12);
var sizer14 = sizerFactory(14);
var sizer16 = sizerFactory(16);