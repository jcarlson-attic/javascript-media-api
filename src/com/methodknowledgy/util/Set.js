dojo.provide("com.methodknowledgy.util.Set");
dojo.require("com.methodknowledgy.util.Collection");
(function(){
    var offset = 0;
    function generateHashCode(){
        return (new Date().getTime() + offset++).toString(16);
    };
    function keys(obj){
        var keys = [];
        for (var i in obj) 
            if (obj.hasOwnProperty(i)) { // && i != hashCodeKey) {
                keys.push(i);
            }
        return keys;
    };
    function values(obj){
        var values = [];
        for (var i in obj) 
            if (obj.hasOwnProperty(i)) { //  && i != hashCodeKey) {
                values.push(obj[i]);
            }
        return values;
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
                for (var i = 0, k = keys(_store), v = values(_store); i < k.length; i++) {
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
                return values(_store);
            };
            if (c && typeof c.iterator == "function") {
                this.addAll(c);
            }
        }
    });
})();
