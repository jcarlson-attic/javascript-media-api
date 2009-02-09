dojo.provide("com.methodknowledgy.util.Collection");
dojo.require("com.methodknowledgy.util.Iterable");
(function(){
    var $break = {};
    var $present = true;
    var c = dojo.declare("com.methodknowledgy.util.Collection", com.methodknowledgy.util.Iterable, {
        constructor: function(){
			this._store = {};
            this._modCount = 0;
			this._length = 0;
        },
        _each: function(iterator, context){
            var index = 0;
            iterator = dojo.hitch(iterator, context);
            try {
				var keys = this._store.keys();
				for (var i = 0; i < keys.length; i++) {
					iterator(this._store[keys[i]]);
				}
            } 
            catch (e) {
                if (e != $break) 
                    throw e;
            }
            return this;
        },
        size: function(){
			var s = 0;
			this._each(function(value){
				s++;
			});
            return s;
        },
        isEmpty: function(){
            return this.size() == 0;
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
			var a = [];
			this._each(function(value) {
				a.push(value);
			});
            return a;
        },
        add: function(o){
            this._modCount++;
            return this._add(o);
        },
        _add: function(o){
            this._store[o.hashCode()] = o;
            return true;
        },
        remove: function(o){
            this._modCount++;
            return this._remove(o);
        },
        _remove: function(o){
			if (!o._$hashCode) {
				return false;
			}
			delete this._store[o.hashCode()];
			return true;
        },
        containsAll: function(c){
            var all = true, i = c.iterator();
            while (all && i.hasNext()) {
                all = this.contains(i.next());
            };
            return all;
        },
        addAll: function(c){
            var i = c.iterator();
            while (i.hasNext()) {
                this.add(i.next());
            }
        },
        removeAll: function(c){
            var i = c.iterator();
            while (i.hasNext()) {
                this.remove(i.next());
            }
        },
        retainAll: function(c){
            var i = this.iterator();
            while (i.hasNext()) {
                var o = i.next();
                if (!c.contains(o)) {
                    this.remove(o);
                }
            }
        },
        clear: function(){
            this._modCount++;
            this._store = {};
        },
        equals: function(o){
            if (o == this) {
                return true;
            }
            if (!o instanceof com.methodknowledgy.util.Collection) {
                return false;
            }
            var i1 = this.iterator(), i2 = o.iterator();
            while (i1.hasNext() && i2.hasNext()) {
                var o1 = i1.next(), o2 = i2.next();
                if (!(o1 == null ? o2 == null : o1 == o2)) {
                    return false;
                }
            }
            return !(i1.hasNext() || i2.hasNext());
        },
        hashCode: function(){
            var hashCode = 1, i = this.iterator();
            while (i.hasNext()) {
                var o = i.next();
                hashCode = 31 * hashCode + (o == null ? 0 : o.hashCode());
            }
            return hashCode;
        }
    });
})();
