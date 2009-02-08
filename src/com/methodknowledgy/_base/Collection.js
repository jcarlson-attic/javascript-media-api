dojo.provide("com.methodknowledgy._base.Collection");
(function(){
    var $break = {};
    var c = dojo.declare("com.methodknowledgy._base.Collection", com.methodknowledgy._base.Iterable, {
        _store: [],
        __each: function(iterator){
            for (var i = 0, length = this.length; i < length; i++) 
                iterator(this[i]);
        },
        _each: function(iterator, context){
            var index = 0;
            iterator = dojo.hitch(iterator, context);
            try {
                this.__each(function(value){
                    iterator(value, index++);
                });
            } 
            catch (e) {
                if (e != $break) 
                    throw e;
            }
            return this;
        },
        size: function(){
            return this._store.length;
        },
        isEmpty: function(){
            return this._store.length == 0;
        },
        contains: function(o){
            if (typeof this.indexOf == "function") {
                if (this.indexOf(o) != -1) {
                    return true;
                }
            }
            var found = false;
            this._each(function(value){
                if (value === o) {
                    found = true;
                    throw $break;
                }
            });
            return found;
        },
        toArray: function(){
        },
        add: function(o){
        },
        remove: function(o){
        },
        containsAll: function(c){
        },
        addAll: function(c){
        },
        removeAll: function(c){
        },
        retainAll: function(c){
        },
        clear: function(){
        },
        equals: function(o){
        },
        hashCode: function(){
        }
    });
})();
