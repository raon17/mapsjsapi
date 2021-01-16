function initMap() {
   const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: -33, lng: 151 },
   });
/*
   const marker = new google.maps.Marker({
      position: { lat: -33.89, lng: 151.274 },
      map,
      icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
   });

   const infoWindow = new google.maps.InfoWindow({
      content:'<h1>Bondi</h1>'
   });

   marker.addListener('click', function() {
      infoWindow.open(map, marker);
   });
*/
   var markers = [
      {
         coords:{lat: -33.89, lng: 151.274},
         iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
         content:'<h1>Bondi</h1>'
      },
      {
         coords:{lat: -37.8136, lng: 144.9631}
      }
   ];

   for (var i = 0; i<markers.length ; i++){
      addMarker(markers[i]);
   }

   function addMarker(props){
      const marker = new google.maps.Marker({
         position: props.coords,
         map: map,
         icon:props.iconImage
      });

      if(props.iconImage){
         marker.setIcon(props.iconImage);
      }

      if(props.content){
         const infoWindow = new google.maps.InfoWindow({
            content:props.content
         });
      
         marker.addListener('click', function() {
            infoWindow.open(map, marker);
         });
      }
   }
}




