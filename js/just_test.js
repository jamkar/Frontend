var obj = {
    id: 1,
    items: [false, false, false],
    markItemAsProcessed: function (item) {
        console.log(item);
    },
    processItems: function() {
        var that = this;

        this.items.forEach(function(item) {
            that.markItemAsProcessed(item);
        });

        function fx() {
            this.id = 5;
            console.log("This: " + this + ", That: " + that);
        }

        fx();
    }
};

obj.processItems();
console.log(obj.id);