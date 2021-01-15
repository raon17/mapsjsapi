function initMap() {
      const uluru = { lat: -25.344, lng: 131.036 };
      const map = new google.maps.Map(document.getElementById("map"), {
         zoom: 6,
         center: uluru,
      });
      // const marker = new google.maps.Marker({
      //    position: uluru,
      //    map: map,
      // });
}

function addMarker(coords){
      const marker = new google.maps.Marker({
         position: coords,
         map:map,
         icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
      });
}
addMarker({ lat: -25.344, lng: 131.036 });

