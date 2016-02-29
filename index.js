document.addEventListener("DOMContentLoaded", function(){
  
  if( navigator.geolocation ){ 
    var params = {enableHighAccuracy: true, timeout:3600, maximumAge:100000};
    navigator.geolocation.getCurrentPosition( drawMap, Errors, params ); 

	  
  }else{
	  alert("Sorry, Your Browser's to old to do this")
	  //Your Browser's to old to do this. 
  }
});
     
function drawMap( location ){ 
	var latitude = location.coords.latitude; //fetch latitude and longitude
	var longitude =location.coords.longitude;
    var map = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + latitude + "," + longitude + "&zoom=14&size=400x400&markers=color:purple|label:A|" + latitude + ',' + longitude; ///get image of map
    var canvas = document.createElement("canvas");//create canvas
	var context = canvas.getContext("2d");//normal canvas stuff
        canvas.width  = 400;//set width and height
        canvas.height = 400;
    
            var image = new Image(); //creates new image
            image.src = map; // Gets map with image on it 
            
            image.onload = function(){
              context.drawImage(image, 0, 0); // on load draw image
            
            document.body.appendChild(canvas); // appends it to the canvas
            }
}
function Errors( error ){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}
