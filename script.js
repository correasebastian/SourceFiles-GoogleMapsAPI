(function(window, mapster, $) {
    var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);
    $mapster.mapster('addMarker', {
        lat: 37.791350,
        lng: -122.465883
    })

    // --------------------------------------------
    // var gm = google.maps;
    // // map options
    // var options = mapster.MAP_OPTIONS,
    //     element = document.getElementById('map-canvas'),
    //     // map
    //     map = mapster.create(element, options);
    // map.zoom(12);

    // // gm.event.addListener(map.gMap, 'click', callback('onclick'));
    // // gm.event.addListener(map.gMap, 'dragend', callback('dragend'));
    // // map._on('click', callback('onclick'));
    // map._on({
    //     obj: map.gMap,
    //     event: 'click',
    //     callback: callback('click on map')
    // });

    // function callback(msg) {

    //     return function(e /* evento que desato*/, obj /*objeto sobre el que se desato*/ ) {
    //         console.log(msg, e, this, obj);
    //     };

    // }

    // for (var i = 0; i < 40; i++) {

    //     var marker1 = map.addMarker({
    //         lat: 37.791350 + Math.random(),
    //         lng: -122.435883 + Math.random(),
    //         draggable: true,
    //         visible: true,
    //         //custom info
    //         id: i,
    //         //para inicializar eventos
    //         events: [{
    //             name: 'click',
    //             callback: callback('click on marker')
    //         }, {
    //             name: 'dragend',
    //             callback: callback('dragend on marker')
    //         }],
    //         //para abrir una info window en este marker cuando se haga click
    //         content: 'i like food',
    //         icon: 'i1/bags.png'
    //             // {
    //             //     url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSMFhQTKw6nhAehrMgjJ-5sOl1eYKT9dQCLSLihBM_tk4yg1T1',
    //             //     // This marker is 20 pixels wide by 32 pixels high.
    //             //     size: new google.maps.Size(20, 32),
    //             //     // The origin for this image is (0, 0).
    //             //     origin: new google.maps.Point(0, 0),
    //             //     // The anchor for this image is the base of the flagpole at (0, 32).
    //             //     anchor: new google.maps.Point(0, 32)
    //             // }

    //     });

    //     var marker2 = map.addMarker({
    //         lat: 37.791350 + Math.random(),
    //         lng: -122.465883 + Math.random(),
    //         draggable: true,
    //         visible: true,
    //         //custom info
    //         id: 2,
    //         events: [{
    //             name: 'click',
    //             callback: callback('click on marker')
    //         }, {
    //             name: 'dragend',
    //             callback: callback('dragend on marker')
    //         }], //40 + i
    //         // ,
    //         // //para inicializar eventos
    //         // event: {
    //         //     name: 'click',
    //         //     callback: callback('click on marker')
    //         // }

    //         //para abrir una info window en este marker cuando se haga click
    //         content: 'i like food',
    //         icon: 'i2/archery.png'
    //     });
    // };


    // console.log(map.markers);
    // var found = map.findBy(function(marker) {
    //     return marker.id === 2;

    // });
    // console.log(found);

    // // map.removeBy(function(marker) {
    // //     return marker.id === 2;

    // // });



}(window, window.Mapster || (window.Mapster = {}), $));
