dojo.provide("com.methodknowledgy._base.Array");
/*
(function(){

    var _a = new Array();
    function proxy(mthd, args){
        return _a[mthd].apply(_a, args);
    }
    proxy.methods = ['concat', 'join', 'reverse', 'slice', 'sort', 'toSource', 'toString', 'valueOf'];
    proxy.generated = {};
	for (var i = 0; i < proxy.methods.length; i++) {
        var fn = proxy.methods[i];
        proxy.generated[fn] = new Function(fn, "return this._proxy('" + fn + "', arguments)");
    };
    var c = dojo.declare("com.methodknowledgy.util.Array", null, {
		_length: 0,
		_proxy: proxy,
		getLength: function() {
			return this._length;
		},
		push: function push() {
			this._length+=arguments.length;
			return proxy(arguments.callee.name, arguments);
		},
		pop: function pop() {
			this._length--;
			return proxy(arguments.callee.name, arguments);
		},
		shift: function shift() {
			this._length+=arguments.length;
			return proxy(arguments.callee.name, arguments);
		},
		splice: function splice() {
			this._length+=(arguments.length-2-arguments[1]);
			return proxy(arguments.callee.name, arguments);
		},
		unshift: function unshift() {
			this._length--;
			return proxy(arguments.callee.name, arguments);
		}
    });
    dojo.extend(c, proxy.generated);
})();
*/

dojo.extend(Array, {
	size: function() {
		return this.length;
	}
});
