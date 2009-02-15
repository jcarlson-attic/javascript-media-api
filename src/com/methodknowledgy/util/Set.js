dojo.provide("com.methodknowledgy.util.Set");
dojo.require("com.methodknowledgy.util.Collection");
(function(){
	var offset = 0;
    function generateHashCode(){
		return (new Date().getTime()+offset++).toString(16);
    };
    var c = dojo.declare("com.methodknowledgy.util.Set", com.methodknowledgy.util.Collection, {
        constructor: function(){
            var _store = {}, _length = 0;
            this._add = function(o){
                _store[generateHashCode()] = o;
                _length++;
                return true;
            };
            this._clear = function(){
                _store = {};
                _length = 0;
            };
            this._remove = function(o){
                for (var i = 0, k = _store.keys(), v = _store.values(); i < k.length; i++) {
                    if (o == v[i]) {
                        delete _store[k[i]];
                        _length--;
                        return true;
                    }
                }
                return false;
            };
            this._size = function(){
                return _length;
            };
            this._toArray = function(){
                return _store.values();
            };
        }
    });
})();
