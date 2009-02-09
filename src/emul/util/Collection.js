dojo.provide("emul.util.Collection");
dojo.require("emul.util.Iterable");
(function(){
    var $break = {};
	var $present = true;
    var c = dojo.declare("emul.util.Collection", java.util.Iterable, {
        _store: {},
		_modCount: 0,
        _each: function(iterator, context){
            var index = 0;
            iterator = dojo.hitch(iterator, context);
            try {
                for (var i = 0, length = this._store.length; i < length; i++) 
                    iterator(this[i], index++);
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
			this._modCount++;
			this._store.push(o);
			return true;
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
