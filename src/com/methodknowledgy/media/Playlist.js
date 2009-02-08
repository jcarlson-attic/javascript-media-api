dojo.provide("com.methodknowledgy.media.Playlist");
(function(){

    var _a = new Array();
	var _length = 0;
    function proxy(mthd, args){
        return _a[mthd].apply(_a, args);
    }
    proxy.methods = ['concat', 'join', 'reverse', 'slice', 'sort', 'toSource', 'toString', 'valueOf'];
    proxy.generated = {};
	for (var i = 0; i < proxy.methods.length; i++) {
        var fn = proxy.methods[i];
        proxy.generated[fn] = new Function(fn, "return this._proxy('" + fn + "', arguments)");
    };
    var c = dojo.declare("com.methodknowledgy.media.Playlist", null, {
		_proxy: proxy,
		getLength: function() {
			return _length;
		},
		push: function push() {
			_length+=arguments.length;
			return proxy(arguments.callee.name, arguments);
		},
		pop: function pop() {
			_length--;
			return proxy(arguments.callee.name, arguments);
		},
		shift: function shift() {
			_length+=arguments.length;
			return proxy(arguments.callee.name, arguments);
		},
		splice: function splice() {
			_length+=(arguments.length-2-arguments[1]);
			return proxy(arguments.callee.name, arguments);
		},
		unshift: function unshift() {
			_length--;
			return proxy(arguments.callee.name, arguments);
		}
    });
    dojo.extend(c, proxy.generated);
})();
