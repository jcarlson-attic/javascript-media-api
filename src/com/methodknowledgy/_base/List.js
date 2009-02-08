dojo.provide("com.methodknowledgy._base.List");
(function(){
    var c = dojo.declare("com.methodknowledgy._base.List", com.methodknowledgy._base.Collection, {
        get: function(index){},
		set: function(index){},
		add: function(index, element){},
		remove: function(index){},
		indexOf: function(o){},
		lastIndexOf: function(o){},
		listIterator: function(){},
		listIterator: function(index){},
		subList: function(fromIndex, toIndex){}
    });
})();

