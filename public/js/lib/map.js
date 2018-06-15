var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.9533, lng: -3.1883},
    zoom: 17
  });

  updateWithGeoLocation();
  getLocalPerformers();
}

function updateWithGeoLocation(){
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
      });

}

function getLocalPerformers(){
    jQuery.getJSON( "/js/lib/buskerLocations.json" , addPerformersToMap) ;
    
}

function addPerformersToMap(data){
    data.forEach(busker => {addBuskerToMap(busker);
        
    });

}

function addBuskerToMap(busker){
    var marker = new google.maps.Marker({position: busker.pitch.location, map: map, title:busker.name, icon:busker.icon});
    var infowindow = new google.maps.InfoWindow({
        content: busker.busker  + " - " + busker.rating + " - " + busker.description
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    console.log(busker);
}
