//Closures with async callbacks

for (var i=0; i<10; i++) {

    (function (currentI) {
        
        setTimeout(function () {
            console.log(currentI);
        }, 1000);

    })(i);

}



