$(window).resize(function() { 
    var browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    if (browserZoomLevel <= 99) {
        location.replace('./dont_zoom_out.html')
    }
});