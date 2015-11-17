(function(window, Mapster) {
    // body...
    $.widget("mapster.mapster", {
        // default options
        options: {},

        // the constructor
        _create: function() {
            console.log('created mapster widget');
            var element = this.element[0],
                options = this.options;
                console.log('this', this);
                this.map=Mapster.create(element, options);

        },

        // called when created, and later when changing options
        _refresh: function() {

        },

        // a public method to change the color to a random value
        // can be called directly via .colorize( "random" )
        addMarker: function(opts) {
        	this.map.addMarker(opts);

        },

        // events bound via _on are removed automatically
        // revert other modifications here
        _destroy: function() {

        },

        // _setOptions is called with a hash of all options that are changing
        // always refresh when changing options
        _setOptions: function() {
            // _super and _superApply handle keeping the right this-context
            this._superApply(arguments);
            this._refresh();
        },

        // _setOption is called for each individual option that is changing
        _setOption: function(key, value) {
            // prevent invalid color values
            if (/red|green|blue/.test(key) && (value < 0 || value > 255)) {
                return;
            }
            this._super(key, value);
        }
    });


})(window, Mapster);
