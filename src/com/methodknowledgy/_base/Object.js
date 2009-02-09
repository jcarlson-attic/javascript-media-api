dojo.provide("com.methodknowledgy._base.Object");
(function(){
	var offset = 0;
    function generateHashCode(){
		return (new Date().getTime()+offset++).toString(16);
    };
	var hashCodeKey = "_$hashCode";
    
    dojo.extend(Object, {
        hashCode: function(){
            if (!this[hashCodeKey]) {
                this[hashCodeKey] = generateHashCode();
            }
            return this[hashCodeKey];
        },
        keys: function(){
            var keys = [];
            for (var i in this) 
                if (this.hasOwnProperty(i) && i != hashCodeKey) {
                    keys.push(i);
                }
            return keys;
        }
    });
})();
