dojo.provide("com.methodknowledgy.util.List");
dojo.require("com.methodknowledgy.util.Collection");
(function(){
    var ListIterator = function(list, index){
        var cursor = (typeof index == "number" && index > 0) ? index : 0;
        var lastRet = -1;
        var expectedModCount = list._modCount;
        function checkForComodification(){
            if (list._modCount != expectedModCount) {
                throw "ConcurrentModificationException";
            }
        };
        this.hasNext = function(){
            return (cursor != list.size());
        };
        this.next = function(){
            checkForComodification();
            if (cursor + 1 > list.size()) {
                throw "NoSuchElementException";
            }
            var next = list.get(cursor);
            lastRet = cursor++;
            return next;
        };
        this.hasPrevious = function(){
            return cursor != 0;
        };
        this.previous = function(){
            checkForComodification();
            if (cursor - 1 < 0) {
                throw "NoSuchElementException";
            }
            var previous = list.get(--cursor);
            lastRet = cursor;
			return previous;
        };
        this.nextIndex = function(){
            return cursor;
        };
        this.previousIndex = function(){
            return cursor - 1;
        };
        this.remove = function(){
            if (lastRet == -1) {
                throw "IllegalStateException";
            }
            checkForComodification();
            try {
                list.remove(collection.toArray()[lastRet]);
                if (lastRet < cursor) {
                    cursor--;
                }
                lastRet = -1;
                expectedModCount = list._modCount;
            } 
            catch (e) {
                throw "ConcurrentModificationException";
            }
        };
        this.set = function(o){
            if (lastRet == -1) {
                throw "IllegalStateException";
            }
            checkForComodification();
            try {
                list.set(lastRet, o);
                expectedModCount = list._modCount;
            } 
            catch (e) {
                throw "ConcurrentModificationException";
            }
        };
        this.add = function(o){
            checkForComodification();
            try {
                list.add(cursor++, o);
                lastRet = -1;
                expectedModCount = list._modCount;
            } 
            catch (e) {
                throw "ConcurrentModificationException";
            }
        };
    };
    var c = dojo.declare("com.methodknowledgy.util.List", com.methodknowledgy.util.Collection, {
        constructor: function(c){
            var _store = [];
            this._add = function(index, element){
                _store.splice(index, 0, element);
            };
            this._clear = function(){
                _store = [];
            };
            this._get = function(index){
                return _store[index];
            };
            this._remove = function(o){
                var i = this.indexOf(o);
                if (i > -1) {
                    return this._removeAt(i);
                }
                return false;
            };
            this._removeAt = function(index){
                _store.splice(index, 1);
                return true;
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
            
            if (c && typeof c.iterator == "function") {
                this.addAll(c);
            }
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
        addAll: function(c$index, c){
            if (arguments.length > 1 && typeof c$index == "number") {
                var i = c.iterator();
                while (i.hasNext()) {
                    this.add(c$index++, i.next());
                }
                return true;
            }
            return this.inherited(arguments);
        },
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
		listIterator: function(index) {
			return new ListIterator(this, index);
		},
        removeAt: function(index){
            var o = this.get(index);
            if (this._removeAt(index)) {
                return o;
            }
            throw "ArrayIndexOutOfBoundsException";
        },
        set: function(index, element){
            if (index > this.size() || index < 0) {
                throw "ArrayIndexOutOfBoundsException"
            }
            this._modCount++;
            return this._set(index, element);
        },
        subList: function(fromIndex, toIndex){
            return this._subList(fromIndex, toIndex);
        }
    });
})();

