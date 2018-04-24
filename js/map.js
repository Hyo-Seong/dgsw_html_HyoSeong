$(document).ready(function(){
    var  StartLatLng = new google.maps.LatLng(35.663174, 128.413722);
    $('#map_canvas').gmap({
        "center" : StartLatLng,
        "zoom" : 16,
    });

    $('#cur_location').click(function(){
        $('#map_canvas').gmap("getCurrentPosition", function(position,status){
            if(status=="OK"){
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var markerBlue = "http://www.google.com/intl/en_us/mapfiles/ms/icons/blue-dot.png";
                $("#map_canvas").gmap("get", "map".panTo(latlng));
                $("#map_canvas").gmap("addMarker", {
                    "position" : latlng,
                    "icon" : markerBlue,
                });
            } else {
                alert("현재 위치를 찾을 수 없습니다.");
            }
        })
    });
});