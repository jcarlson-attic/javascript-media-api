dojo.provide("com.methodknowledgy._base.Array");
dojo.require("com.methodknowledgy.util.List");
(function(){
    var array = dojo.mixin({}, com.methodknowledgy.util.List.prototype, {
        constructor: function(){
        },
        _clear: function(){
            while (this.length > 0) {
                this.pop();
            }
        },
        _get: function(index){
            return this[index];
        },
        _remove: function(o){
            var i = this.indexOf(o);
            if (i > -1) {
                this.splice(i, 1);
                return true;
            }
            return false;
        },
        _set: function(index, element){
            this[index] = element;
            return element;
        },
        _size: function(){
            return this.length;
        },
        _subList: function(fromIndex, toIndex){
			return this.slice(fromIndex, toIndex);
        },
        _toArray: function(){
            return this.concat();
        }
    });
	// Don't inherit hashCode
	// delete array.hashCode;
    dojo.extend(Array, array);
})();
