dojo.provide("com.methodknowledgy.util.Collection");
dojo.require("com.methodknowledgy.util.Iterable");
(function(){
    var c = dojo.declare("com.methodknowledgy.util.Collection", com.methodknowledgy.util.Iterable, {
        constructor: function(c){
            if (this.constructor === com.methodknowledgy.util.Collection) {
                throw "Collection cannot be instantiated directly!";
            }
            this._modCount = 0;
        },
        _each: function(iterator){
            try {
                var _i = this.iterator(), i = 0;
                while (_i.hasNext()) {
                    iterator(_i.next(), i);
                }
            } 
            catch (e) {
                if (e != com.methodknowledgy.util.Collection.$break) 
                    throw e;
            }
        },
        add: function(o){
            this._modCount++;
            return this._add(o);
        },
        addAll: function(c){
            var i = c.iterator();
            while (i.hasNext()) {
                this.add(i.next());
            }
            return true;
        },
        clear: function(){
            this._modCount++;
            this._clear();
            return;
        },
        contains: function(o){
            var found = false;
            this._each(function(value){
                if (value == o) {
                    found = true;
                    throw com.methodknowledgy.util.Collection.$break;
                }
            });
            return found;
        },
        containsAll: function(c){
            var all = true, i = c.iterator();
            while (all && i.hasNext()) {
                all = this.contains(i.next());
            };
            return all;
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
        /*
         hashCode: function(){
         var hashCode = 1, i = this.iterator();
         while (i.hasNext()) {
         var o = i.next();
         hashCode = 31 * hashCode + (o == null ? 0 : o.hashCode());
         }
         return hashCode;
         },
         */
        isEmpty: function(){
            return this.size() == 0;
        },
        size: function(){
            return this._size();
        },
        remove: function(o){
            this._modCount++;
            return this._remove(o);
        },
        removeAll: function(c){
            var i = c.iterator();
            while (i.hasNext()) {
                this.remove(i.next());
            }
            return true;
        },
        retainAll: function(c){
            var i = this.iterator();
            while (i.hasNext()) {
                var o = i.next();
                if (!c.contains(o)) {
                    this.remove(o);
                }
            }
            return true;
        },
        toArray: function(){
            return this._toArray();
        }
    });
    dojo.mixin(c, {
        $break: {}
    });
})();
