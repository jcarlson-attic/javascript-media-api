dojo.provide("com.methodknowledgy._base.Function");
(function(){
    function Incremental(i, n, s, fn, cb){
        var t, r = false, p = arguments;
        this.start = start;
        this.stop = stop;
        this.reset = reset;
        
        reset();
        start();
        
        function start(){
            r = true;
            loop();
        };
        function stop(){
            clearTimeout(t);
            r = false;
        };
        function reset(){
            stop();
            i = p[0];
            n = p[1];
            s = p[2];
            fn = p[3];
            cb = p[4];
        };
        function loop(){
            var c = 0;
            while (r && i < n && c < s) {
                fn(i, n, c);
                i++;
                c++;
            }
            if (i < n) {
                setTimeout(function(){
                    loop();
                }, 50);
            }
            else {
                r = false;
                if (cb) {
                    cb();
                }
            }
        }
    };
    dojo.extend(Function, {
        incremental: function incremental(i, n, blockSize, callback){
            return new Incremental(i, n, blockSize, this, callback);
        },
        curry: function(){
            var fn = this, args = Array.prototype.slice.call(arguments);
            return function(){
                return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
            }
        }
        
    });
})();

