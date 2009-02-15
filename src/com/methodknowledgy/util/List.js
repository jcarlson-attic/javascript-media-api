dojo.provide("com.methodknowledgy.util.List");
dojo.require("com.methodknowledgy.util.Collection");
(function(){
    var c = dojo.declare("com.methodknowledgy.util.List", com.methodknowledgy.util.Collection, {
        constructor: function(){
            var _store = [];
			this._add = function(index, element){
				_store.splice(index, 0, element);
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
                _store[index] = element;
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
        add: function(o$index, element){
			this._modCount++;
            if (arguments.length > 1 && typeof o$index == "number") {
                this._add(o$index, element);
				return;
            }
			this._add(this.size(), o$index);
            return true;
        },
		addAll: function(c$index, c) {
			if (arguments.length > 1 && typeof c$index == "number") {
				var i = c.iterator();
				while (i.hasNext()) {
					this.add(c$index++, i.next());
				}
				return true;
			}
			return this.inherited(c$index);
		},
        /*
         * TODO
         * addAll: function(c){return true;},
         * addAll: function(index, c){},
         */
        get: function(index){
            if (index + 1 > this.size() || index < 0) {
                throw "ArrayIndexOutOfBoundsException"
            }
            return this._get(index);
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

