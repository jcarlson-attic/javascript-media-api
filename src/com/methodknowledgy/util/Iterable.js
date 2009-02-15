dojo.provide("com.methodknowledgy.util.Iterable");
(function(){
    var Iterator = function(collection){
        var cursor = 0;
        var lastRet = -1;
        var expectedModCount = collection._modCount;
        function checkForComodification(){
            if (collection._modCount != expectedModCount) {
                throw "ConcurrentModificationException";
            }
        };
        this.hasNext = function(){
            return (cursor != collection.size());
        };
        this.next = function(){
            checkForComodification();
            if (cursor + 1 > collection.size()) {
                throw "NoSuchElementException";
            }
            var next = collection.toArray()[cursor];
            lastRet = cursor++;
            return next;
        };
        this.remove = function(){
            if (lastRet == -1) {
                throw "IllegalStateException";
            }
            checkForComodification();
            try {
                collection.remove(collection.toArray()[lastRet]);
                if (lastRet < cursor) {
                    cursor--;
                }
                lastRet = -1;
                expectedModCount = collection._modCount;
            } 
            catch (e) {
                throw "ConcurrentModificationException";
            }
        };
    };
    var c = dojo.declare("com.methodknowledgy.util.Iterable", null, {
        iterator: function(){
            return new Iterator(this);
        }
    });
})();
