dojo.provide("com.methodknowledgy.media.Playable");

(function() {
	var c = dojo.declare("com.methodknowledgy.media.Playable", null, {
	    constructor: function(){
	        this._active = false;
	        this._scrubbable = false;
	        this._skippable = false;
	        this._runTime = 0;
	        this._attributes = {};
	        this._state = this.constructor.STATE.LOADING;
	    },
	    isActive: function(){
	        return this._active;
	    },
	    setActive: function(active){
	        return this._active = active;
	    },
	    isScrubbable: function(){
	        return this._scrubbable;
	    },
	    setScrubbable: function(scrubbable){
	        return this._scrubbable = scrubbable;
	    },
	    isSkippable: function(){
	        return this._skippable;
	    },
	    setSkippable: function(skippable){
	        return this._skippable = skippable;
	    },
	    getRunTime: function(){
	        return this._runTime;
	    },
	    setRunTime: function(runTime){
	        return this._runTime = runTime;
	    },
	    getAttributes: function(){
	        return this._attributes;
	    },
	    setAttributes: function(attributes){
	        return this._attributes = attributes;
	    },
	    getState: function(){
	        return this._state;
	    },
	    setState: function(state){
	        return this._state = state;
	    }
	});
	dojo.mixin(c, {
	    STATE: {
	        LOADING: 0,
	        READY: 1,
	        RUNNING: 2,
	        SUSPENDED: 3,
	        STOPPED: 4,
	        FINISHED: 5
	    }
});
})();
