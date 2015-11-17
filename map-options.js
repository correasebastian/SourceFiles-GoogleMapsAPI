(function(window, google, mapster) {
    var gm = google.maps;
    mapster.MAP_OPTIONS = {
        center: {
            lat: 37.791350,
            lng: -122.435883
        },
        zoom: 10,
        disableDefaultUI: false,
        scrollwheel: true,
        draggable: true,
        mapTypeId: gm.MapTypeId.ROADMAP,
        maxZoom: 21, //max 21
        minZoom: 0, //min 0
        zoomControlOptions: {
            position: gm.ControlPosition.LEFT_BOTTOM,
            style: gm.ZoomControlStyle.DEFAULT

        },
        panControlOptions: {
            position: gm.ControlPosition.LEFT_BOTTOM

        },
        cluster:{
            options:{
               /* styles:[{
                    
                }
                ]*/
            }

        }
    };

})(window, google, window.Mapster || (window.Mapster = {}));
