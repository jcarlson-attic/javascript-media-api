dojo.provide("com.methodknowledgy.util.Set");
dojo.require("com.methodknowledgy.util.Collection");
(function(){
    var c = dojo.declare("com.methodknowledgy.util.Set", com.methodknowledgy.util.Collection, {
        constructor: function(){
            var _store = {}, _length = 0;
            this._add = function(o){
                if (o.hashCode() != o.hashCode()) {
                    o = new o.constructor(o);
                }
                _store[o.hashCode()] = o;
				_length++;
                return true;
            };
			this._clear = function(){
				_store = {};
				_length = 0;
			};
            this._remove = function(o){
                if (!o._$hashCode) {
                    return false;
                }
                delete _store[o.hashCode()];
				_length--;
                return true;
            };
			this._size = function(){
				return _length;
			};
			this._toArray = function(){
				return _store.values();
			};
        },
        equals: function(o){
            return this.inherited(0);
        },
        hashCode: function(){
            return this.inherited(0);
        }
    });
})();
