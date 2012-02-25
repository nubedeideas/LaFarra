App.Events = (function(lng, app, undefined) {

	lng.dom('#player').on('tap', function(event) {
		console.log("Tap Event - Player");
        LUNGO.Sugar.Sound.background('http://server10.20comunicacion.com:8012/stream.mp3');
        console.log("On Air - Player");
    });

    return {

    }

})(LUNGO, App);