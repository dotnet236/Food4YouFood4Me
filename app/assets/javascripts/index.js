/**
 * This module implements all the JS interactions on template picker page.
 */

/**
 * Constants.
 */
var CONST = {
    WELCOMPAGE_EDITOR_OVERLAY_ID: "welcome-page-editor"
};


/**
 * Static class that encloses all the functionality in a namespace.
 */
var EventTemplate = {

	map: null,
	geocoder: null,

  initializeMap: function() { 
	  EventTemplate.geocoder = new google.maps.Geocoder();
	  var latlng = new google.maps.LatLng(40.716668, -74);
	    var myOptions = {
	      zoom: 13,
	      center: latlng,
	      mapTypeControl: false,
	      mapTsypeControlOptions: {
	        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
	      },
	    zoomControl: true,
	    zoomControlOptions: {
	        style: google.maps.ZoomControlStyle.SMALL
	      },
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	    EventTemplate.map = new google.maps.Map(document.getElementById("googleMap"), myOptions);
	//     setVenueLocationMarker(map, venueLocations);
	//     setContactMarkers(map, contactLocations);
  },
  
    /**
     * Initializer called on document ready.
     */
    init: function() {
        var t = this;

        // form submit event listener.
        $("#getStarted").click($.proxy(t.showContactOptions, t));
    },

    /**
     * Handles submit event of the form and does the following,
     *   a) prevents default action
     *   b) creates a welcome page document via ajax
     *   c) takes the user to the editor if this is the first page they are linking
     *   d) if the user has linked pages already redirects them to the dashboard.
     */
    showContactOptions: function(e) {

        // prevent the default action.
        e.preventDefault();

        var container = $("<div id=\"overlayWin\"/>");
        container.css({"height":"400px"});

        container.load("steps/step1.j", function(result){
            container.find(".close").click(function() {
               $.unblockUI();
            });

//            container.find("#ctctConnectButton").click(function(){
//                container.load("steps/step2.j");
//            });

            container.find("#ctctConnectButton").click(function(){
            var winRef = window.open(
            "steps/login_win.j",
            '_blank',
            'scrollbars=no,menubar=no,height=600,width=1000,resizable=yes,scrollbars=yes,toolbar=no,location=no,status=no'
        );            });

            $(".callout").hide();
            $.blockUI({
                css: {
                    border: 'none',
                    padding: '15px',
                    backgroundColor: 'transparent',
                    opacity: .5,
                    color: '#fff',
                    centerY: true,
                    centerX: true,
                    width: '35%'
                },
                message : container
            });
        })

    },

    stepToForm : function (e) {
      $("#overlayWin").load("steps/step2.j", function(){
      	$(this).find(".find-venue").click(function(){
      		$.unblockUI();
      		
      	 	EventTemplate.initializeMap();
      		EventTemplate.showStats();
      		EventTemplate.getContacts();
      		
	       		setVenueLocationMarker(EventTemplate.map, "655 West 34th St, New York City");
	       		var data = [];
	       		data.push("122 Hudson St, New York City NY");
	       		data.push("902 Broadway St, New York City NY");
	       		data.push("688 Avenue of the Americas, New York City NY");
	       		data.push("98 8th Avenue, New York City NY");
             	for(var i = 0; i < data.length; i++){
	             	GeoSetAddress(EventTemplate.map, data[i]);
             	}
             	
      	 	$(".callout").hide();
      	 	$("#map_canvas").hide();
      	 	$("html").css("background", "none");
      	 	$(".wrap").removeClass("wrap");
      	 	$(".head").css("width","1800px");
      	 	$(".head").css("position","absolute");
      	 	$("#googleMap").css("width", "101%");
      	 	$("#googleMap").show();
      	 	$("#googleMap").css("top", "50px");
      	 	$("#googleMap").trigger("click");
      	
      	});
      	
      
      });
      $("#overlayWin").find(".close").click(function() {
               $.unblockUI();
            });
    },

    getContacts : function(userName) {
        fbPageDetails = {'userName':userName},
         returnVal = false,
         req = $.ajax({
             async: false,
             type: "GET",
             url:  "/eventEstimator/contacts/json.j",
             data: fbPageDetails,
             dataType: "json",
             success: function(data, status, req) {
             },
             error: function(data, status, req) {
                 // nothing to handle here.
             }
         });

    },
    
	getVenue : function() {
       YelpLocationService.searchBusinessByCoords("venues", null, {latitude:40.71668, longitude:-74}, 10, 5, "yelpResultHandler");

   	},

   handleVenue: function() {
       if (YelpLocationService.isResponseSuccess(response)) {
       		var bus = response.businesses[0];
       }
   },
   
    showStats: function() {
    	var div = $("<div/>");
    	div.load("steps/step3.j", function(result){});
    	$("body").append(div);
    },
    /**
     * Processes a successful http response for create welcome page request.
     *
     */
    processStep: function(response) {
        var success = response.status;
        alert(response)
    },

    processError: function(response) {
        alert("ERROR == " + response);
    }

};

$(document).ready(EventTemplate.init());
