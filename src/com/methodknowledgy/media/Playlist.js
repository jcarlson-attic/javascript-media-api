dojo.provide("com.methodknowledgy.media.Playlist");
(function(){
    var c = dojo.declare("com.methodknowledgy.media.Playlist", com.methodknowledgy.media.Playable, {
        _index: -1,
        hasCurrent: function(){
            return this._index > -1;
        },
        add: function(item){
            return ++this._index;
        },
        currentIndex: function(){
            if (this.hasCurrent()) {
                return this._index;
            }
            return null;
        },
        nextIndex: function(){
            if (this.hasNext()) {
                return this._index + 1;
            }
            return null;
        },
        hasPrevious: function(){
            return this._index > 0;
        },
        previousIndex: function(){
            if (hasPrevious()) {
                return this._index - 1;
            }
            return null;
        },
        /*
         * Can't implement these methods until I have a "collection" class to inherit from
         */
        current: function(){
        },
        hasNext: function(){
        },
        next: function(){
        },
        previous: function(){
        },
        jumpTo: function(index){
        }
    });
})();
