dojo.provide("com.methodknowledgy.util.List");
dojo.require("com.methodknowledgy.util.Collection");
(function(){
    var c = dojo.declare("com.methodknowledgy.util.List", com.methodknowledgy.util.Collection, {
        constructor: function(){
            var _store = [];
            this._add = function(o){
                if (o.hashCode() != o.hashCode()) {
                    o = new o.constructor(o);
                }
                _store.push(o);
                return true;
            };
            this._clear = function(){
                _store = [];
            };
            this._get = function(index){
                return _store(index);
            };
            this._remove = function(o){
                var i = this.indexOf(o);
                if (i > -1) {
                    _store.splice(i, 1);
                    return true;
                }
                return false;
            };
            this._set = function(index, element){
                _store.splice(index, 1, element);
                return element;
            };
            this._size = function(){
                return _store.length;
            };
            this._subList = function(fromIndex, toIndex){
                return _store.slice(fromIndex, toIndex);
            };
            this._toArray = function(){
                return _store.concat();
            };
        },
        /*
         * TODO
         * add: function(o){return true;},
         * add: function(index, element){return;},
         * addAll: function(c){return true;},
         * addAll: function(index, c){},
         */
        equals: function(o){
            return this.inherited(o);
        },
        get: function(index){
            if (index + 1 > this.size() || index < 0) {
                throw "ArrayIndexOutOfBoundsException"
            }
            return this._get(index);
        },
        hashCode: function(){
            return this.inherited(0);
        },
        indexOf: function(o){
            var index = -1;
            this._each(function(value, i){
                if (value === o) {
                    index = i;
                    throw com.methodknowledgy.util.Collection.$break;
                }
            });
            return index;
        },
        lastIndexOf: function(o){
            var index = -1;
            this._each(function(value, i){
                if (value === o) {
                    index = i;
                }
            });
            return index;
        },
        /*
         * TODO
         * listIterator: function(){},
         * listIterator: function(index){},
         * remove: function(index){return {};},
         * remove: function(o){return true;},
         */
        set: function(index, element){
            if (index > this.size() || index < 0) {
                throw "ArrayIndexOutOfBoundsException"
            }
            return this._set(index, element);
        },
        subList: function(fromIndex, toIndex){
            return this._subList(fromIndex, toIndex);
        }
    });
})();

