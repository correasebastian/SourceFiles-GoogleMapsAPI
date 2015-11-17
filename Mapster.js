(function(window, google, List) {
    var Mapster = (function() {
        function Mapster(element, opts) {
            this.gMap = new google.maps.Map(element, opts);
            this.markers = List.create(); //[];
            console.log(this.gMap);
            this.markerClusterer = new MarkerClusterer(this.gMap, []);
        }
        Mapster.prototype = {
            zoom: function(level) {
                if (level) {
                    this.gMap.setZoom(level);
                } else {

                    return this.gMap.getZoom();
                }
            },
            _on: function(opts) {
                var self = this;
                google.maps.event.addListener(opts.obj, opts.event, function(e) {
                    opts.callback.call(self, e, opts.obj);
                });
            },

            addMarker: function(opts) {
                var marker,
                    self = this;
                opts.position = {
                    lat: opts.lat,
                    lng: opts.lng
                };
                marker = this._createMarker(opts);
                // this._addMarker(marker);
                if (this.markerClusterer) {
                    this.markerClusterer.addMarker(marker);
                };

                this.markers.add(marker);
                console.log(marker);

                if (opts.events) {
                    this._attachEvents(marker, opts.events);
                }

                if (opts.content) {
                    this._on({
                        obj: marker,
                        event: 'click',
                        callback: function() {
                            var infoWindow = new google.maps.InfoWindow({
                                content: opts.content
                            });
                            infoWindow.open(this.gMap, marker)
                        }
                    });
                }
                return marker;

            },
            // _addMarker: function(marker) {
            //     this.markers.push(marker);
            // },
            // _removeMarker: function(marker) {
            //     var indexOf = this.markers.indexOf(marker);
            //     if (indexOf !== -1) {
            //         this.markers.splice(indexOf, 1);
            //         marker.setMap(null);
            //     }
            // },
            // findMarkerByLat: function(lat) {
            //     for (var i = 0; i < this.markers.length; i++) {
            //         var marker = this.marke[i];
            //         if (marker.position.lat() === lat) {
            //             return marker;
            //         }
            //     }
            // },

            findBy: function(callback) {
                return this.markers.find(callback);
            },
            removeBy: function(callback) {
                var self = this;
                var action = function(markers) {
                    console.log(this, self);

                    markers.forEach(function(marker) {

                        if (self.markerClusterer) {
                            self.markerClusterer.removeMarker(marker);

                        } else {
                            marker.setMap(null);
                        }


                    });
                    // body...
                };
                this.markers.find(callback, action);
            },
            _createMarker: function(opts) {
                // if (draggable === undefined) {
                //     draggable = true;
                // }
                opts.map = this.gMap;


                return new google.maps.Marker(opts);
            },
            _attachEvents: function(obj, events) {
                var self = this;
                events.forEach(function(event) {
                    self._on({
                        obj: obj,
                        event: event.name,
                        callback: event.callback
                    });
                })

            }

        };
        return Mapster;
    })();

    Mapster.create = function(element, opts) {
        return new Mapster(element, opts);
    };

    window.Mapster = Mapster;
})(window, google, window.List);
