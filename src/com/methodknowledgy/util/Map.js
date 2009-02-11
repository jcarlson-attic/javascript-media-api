dojo.provide("com.methodknowledgy.util.Map");
(function(){
    var Entry = function(key, value){
        this.key = function(){
            return key;
        };
        this.value = function(){
            return value;
        };
    };
    
    var c = dojo.declare("com.methodknowledgy.util.Map", null, {
        constructor: function(){
        },
        clear: function(){
        },
        containsKey: function(key){
			return false;
        },
        containsValue: function(value){
			return false;
        },
        entrySet: function(){
			return new com.methodknowledgy.util.Set(new Entry());
        },
        equals: function(o){
			return false;
        },
        get: function(key){
			return {};
        },
        isEmpty: function(){
			return this.size() == 0;
        },
        keySet: function(){
			return new com.methodknowledgy.util.Set([]);
        },
        put: function(key, value){
			return value;
        },
        putAll: function(m){
			return;
        },
        remove: function(key){
			return {};
        },
        size: function(){
			return 0;
        },
        values: function(){
			return new com.methodknowledgy.util.Set([]);
        }
    });
})();

