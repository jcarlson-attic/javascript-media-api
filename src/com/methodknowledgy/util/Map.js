dojo.provide("com.methodknowledgy.util.Map");
(function(){
    var Entry = function(key, value){
        this.getKey = function(){
            return key;
        };
        this.getValue = function(){
            return value;
        };
        this.setValue = function(newValue){
            value = newValue;
        };
    };
    
    var c = dojo.declare("com.methodknowledgy.util.Map", null, {
        constructor: function(){
            var _store = new com.methodknowledgy.util.Set();
            this._modCount = 0;
            
            this._clear = function(){
                _store = new com.methodknowledgy.util.Set();
            };
            this._entrySet = function(){
                return _store;
            };
            this._put = function(key, value){
                var entry = null;
                var itr = this.entrySet().iterator();
                while (itr.hasNext()) {
                    var e = itr.next();
                    if (e.getKey() == key) {
                        entry = e;
                        break;
                    }
                }
                if (entry == null) {
                    entry = new Entry(key, value);
                    _store.add(entry);
                }
                return entry.setValue(value);
            };
            this._remove = function(key){
            };
            this._size = function(){
                return _store.size();
            };
            
        },
        clear: function(){
            this._modCount++;
            this._clear();
        },
        containsKey: function(key){
            var found = false;
            var itr = this.entrySet().iterator(), i = 0;
            while (itr.hasNext()) {
                var e = itr.next();
                if (e.getKey() == key) {
                    found = true;
                    break;
                }
            }
            return found;
        },
        containsValue: function(value){
            var found = false;
            var itr = this.entrySet().iterator(), i = 0;
            while (itr.hasNext()) {
                var e = itr.next();
                if (e.getValue() == value) {
                    found = true;
                    break;
                }
            }
            return found;
        },
        entrySet: function(){
            return this._entrySet();
        },
        equals: function(o){
            if (o == this) {
                return true;
            }
            if (!o instanceof com.methodknowledgy.util.Map) {
                return false;
            }
            var i1 = this.entrySet(), i2 = o.entrySet();
            while (i1.hasNext() && i2.hasNext()) {
                var o1 = i1.next(), o2 = i2.next();
                if (!(o1.equals(o2))) {
                    return false;
                }
            }
            return !(i1.hasNext() || i2.hasNext());
        },
        get: function(key){
            var value = null;
            var itr = this.entrySet().iterator(), i = 0;
            while (itr.hasNext()) {
                var e = itr.next();
                if (e.getKey() == key) {
                    value = e.getValue();
                    break;
                }
            }
            return value;
        },
        isEmpty: function(){
            return this.size() == 0;
        },
        keySet: function(){
            var keys = new com.methodknowledgy.util.Set();
            var itr = this.entrySet().iterator();
            while (itr.hasNext()) {
                keys.add(itr.next().getKey());
            }
            return keys;
        },
        put: function(key, value){
            this._modCount++;
            return this._put(key, value);
        },
        putAll: function(m){
            if (!(m instanceof com.methodknowledgy.util.Map)) {
                throw "InvalidArgumentException";
            }
            var itr = m.entrySet().iterator();
            while (itr.hasNext()) {
                var e = itr.next();
                this.put(e.getKey(), e.getValue());
            }
            return;
        },
        remove: function(key){
            var value = null;
            var i = this.entrySet().iterator();
            while (i.hasNext()) {
                var e = i.next();
                if (e.getKey() == key) {
                    value = e.getValue();
                    i.remove();
                    this._modCount++;
                    break;
                }
            }
            return value;
        },
        size: function(){
            return this._size();
        },
        values: function(){
            var values = new com.methodknowledgy.util.Set();
            var itr = this.entrySet().iterator();
            while (itr.hasNext()) {
                values.add(itr.next().getValue());
            }
            return values;
        }
    });
})();

