/**

 * Map functions for loading contacts and getting geoCoordinates.  
 */


// mycustomoverlay.js
//
//  The MyCustomOverlay class Javascript is provided by Kjell Scharning
//  http://www.birdtheme.org/
//  googlemapstool@birdtheme.org
//  October 2009
//
//   The MyCustomOverlay class uses code from ProjectedOverlay (John Coryat),
//   EInsert (Mike Williams) and ELabel (Mike Williams)
//   John Coryat: http://maps.huge.info http://www.usnaviguide.com
//   Mike Williams: http://econym.org.uk/gmap/
//
//  Licensed under the Apache License, Version 2.0;
//  http://www.apache.org/licenses/LICENSE-2.0

function MyCustomOverlay(overlayContent,lat,lon,map)
{
    this.overlayContent = overlayContent;
    this.point = new google.maps.LatLng(lat, lon);
    this.setMap(map);
    this.map_ = map ;
}

$(function() {
  MyCustomOverlay.prototype = new google.maps.OverlayView();

  MyCustomOverlay.prototype.onAdd= function(map)
  {
      var div = $("<div/>");
      div.attr('id', 'test');
      div.css('position', 'absolute');
      div.html(this.overlayContent);
      div.css('background', 'rgba(0,0,0,.8)');
      div.css('border-radius', '10px');
      div.addClass('mapAdContainer');
      this.div_ = div[0];
      var panes = this.getPanes();
      var projection = this.getProjection();
      var p = projection.fromLatLngToDivPixel(this.point);
      console.log(this.point);
      console.log(p);
      this.div_.style.left = p.x + 'px';
      this.div_.style.top = p.y + 'px';
      div.find("#trade").click(function(){
        var theirQuantity = $("<input/>");
        var yourQuantity = $("<input type='text' style='z-index:999292929' value='10 Boxes of cereal'/>");
        var yourProduct = $("<input type='text'/>");
        var theirProduct = $("<label/>").text("For " + div.find(".title").text());
        var tradeButton = $(this).clone();

        var parent = $(this)
          .parent()
          .html('')
          .append("<br/>")
          .append(theirProduct)
          .append("<label>I'll trade you</label>")
          .append("<br/>")
          .append(yourQuantity)
          .append("<br/>")
          .append(tradeButton)

        tradeButton.click(function(){
         parent.html("<strong>Trade has been offered. We'll let you know when they respond.</strong>");
        });

      });
      panes.overlayLayer.appendChild(div[0]);
      div.parent().css('z-index', '3333333');
  }

  MyCustomOverlay.prototype.onRemove = function()
  {
      this.div_.parentNode.removeChild(this.div_);
      delete(this.map) ;
      delete(this.div) ;
  }

  MyCustomOverlay.prototype.copy = function()
  {
      return new MyCustomOverlay(this.overlayContent);
  }

  MyCustomOverlay.prototype.draw = function(force)
  {
    var projection = this.getProjection();
    var p = projection.fromLatLngToDivPixel(this.point);
    this.div_.style.left = p.x + 'px';
    this.div_.style.top = p.y + 'px';
  }

  MyCustomOverlay.prototype.show = function() {
      this.div_.style.display="";
      this.hidden = false;
  }

  MyCustomOverlay.prototype.hide = function() {
      this.div_.style.display="none";
      this.hidden = true;
  }

  MyCustomOverlay.prototype.supportsHide = function() {
      return true;
  }

  MyCustomOverlay.prototype.isHidden = function() {
      return this.hidden;
  }

});

function GeoSetAddress(map, address) {
		var geoLocale;
		var image = new google.maps.MarkerImage('images/spot_contact.png');
		EventTemplate.geocoder.geocode( { 'address': address}, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
	      map.setCenter(results[0].geometry.location);
	      var marker = new google.maps.Marker({
	          map: map,
	          icon: image,
	          position: results[0].geometry.location
	     	});
	    } else {
	      alert("Geocode was not successful for the following reason: " + status);
	    }
	  });
}


function setContactMarkers(map, locations) {
	  var image = new google.maps.MarkerImage('images/spot_contact.png');
	  for (var i = 0; i < locations.length; i++) {
	    var contactpoint = locations[i];
	    var myLatLng = new google.maps.LatLng(contactpoint[1], contactpoint[2]);
	    var marker = new google.maps.Marker({
	        position: myLatLng,
	        map: map,
	        icon: image,
	        title: contactpoint[0],
	        zIndex: contactpoint[3]
	    });
	  }
	  }


function setVenueLocationMarker(map, address) {
	  var image = new google.maps.MarkerImage('images/spot_venue.png');
		var geoLocale;
		EventTemplate.geocoder.geocode( { 'address': address}, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
	      map.setCenter(results[0].geometry.location);
	      var marker = new google.maps.Marker({
	          map: map,
	          icon: image,
	          position: results[0].geometry.location
	     	});
	    } else {
	      alert("Geocode was not successful for the following reason: " + status);
	    }
	  });
}
