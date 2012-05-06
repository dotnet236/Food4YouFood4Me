
/**
 * Yelp business location service. Provides methods for searching Yelp for businesses near the
 * provided location. This code makes cross domain ajax requests using the JSONP approach.
 * Yelp uses known categories, you can leave the category params null to avoid response errors.
 *
 * Example:
 * function yelpResultHandler(response) {
 *     if (YelpLocationService.isResponseSuccess(response)) {
 *         alert(response.businesses.length); // see example response json below...
 *     }
 * }
 * YelpLocationService.searchBusinessByCoords("sushi", null, {latitude:37, longitude:-122}, 10, 5, "yelpResultHandler");
 * YelpLocationService.searchBusinessByAddress("sushi", null, "1601 trapelo rd. waltham ma, 02451", 10, 5, "yelpResultHandler");
 *
 * Example response:
 * "businesses":[
      {
         "rating_img_url":"http://media4.ak.yelpcdn.com/static/201012163106483837/img/ico/stars/stars_4_half.png",
         "country_code":"US",
         "id":"39DgSNLIaRSxZJGAl-nmGw",
         "is_closed":false,
         "city":"San Francisco",
         "mobile_url":"http://m.yelp.com/biz/39DgSNLIaRSxZJGAl-nmGw",
         "review_count":75,
         "zip":"94104",
         "state":"CA",
         "latitude":37.791741700000003,
         "rating_img_url_small":"http://media4.ak.yelpcdn.com/static/201012161127761206/img/ico/stars/stars_small_4_half.png",
         "address1":"471 Pine St",
         "address2":"",
         "address3":"",
         "phone":"4158340485",
         "state_code":"CA",
         "categories":[
            {
               "category_filter":"bars",
               "search_url":"http://www.yelp.com/search?find_loc=471+Pine+St%2C+San+Francisco+94104&cflt=bars",
               "name":"Bars"
            }
         ],
         "photo_url":"http://media3.ak.yelpcdn.com/bpthumb/GpQlB2WMZKfgQdZdfxw4vw/ms",
         "distance":0.33350214,
         "name":"The Occidental Cigar Club",
         "neighborhoods":[
            {
               "url":"http://www.yelp.com/search?find_loc=Financial+District%2C+San+Francisco%2C+CA",
               "name":"Financial District"
            }
         ],
         "url":"http://www.yelp.com/biz/the-occidental-cigar-club-san-francisco",
         "country":"USA",
         "avg_rating":4.5,
         "longitude":-122.40368290000001,
         "nearby_url":"http://www.yelp.com/search?find_loc=471+Pine+St%2C+San+Francisco+94104",
         "reviews":[
            {
               "rating_img_url_small":"http://media2.ak.yelpcdn.com/static/20101216418129184/img/ico/stars/stars_small_4.png",
               "user_photo_url_small":"http://media1.ak.yelpcdn.com/upthumb/RoBAA1y1-AmZnQ23mJhK4A/ss",
               "rating_img_url":"http://media2.ak.yelpcdn.com/static/201012164084228337/img/ico/stars/stars_4.png",
               "rating":4,
               "user_url":"http://www.yelp.co.uk/user_details?userid=tTGTU1doKuSOcSYG9IScTA",
               "url":"http://www.yelp.com/biz/the-occidental-cigar-club-san-francisco#hrid:GKmFtvfnhZ2JtYAK5RyKJA",
               "mobile_uri":"http://m.yelp.com/biz/39DgSNLIaRSxZJGAl-nmGw?srid=GKmFtvfnhZ2JtYAK5RyKJA",
               "text_excerpt":"What a place! A great place to hang out and SMOKE cigars. I screamed in capitals because if you don't like cigars you wont like it. \nMainly men, smoking fat...",
               "user_photo_url":"http://media1.ak.yelpcdn.com/upthumb/RoBAA1y1-AmZnQ23mJhK4A/ms",
               "date":"2011-09-08",
               "user_name":"Nick P.",
               "id":"GKmFtvfnhZ2JtYAK5RyKJA"
            },
            {
               "rating_img_url_small":"http://media2.ak.yelpcdn.com/static/20101216418129184/img/ico/stars/stars_small_4.png",
               "user_photo_url_small":"http://media1.ak.yelpcdn.com/upthumb/PapmMELK_hge-P0GrTAWuw/ss",
               "rating_img_url":"http://media2.ak.yelpcdn.com/static/201012164084228337/img/ico/stars/stars_4.png",
               "rating":4,
               "user_url":"http://www.yelp.com/user_details?userid=SiwZeCriqaJrh_qK10Wo2g",
               "url":"http://www.yelp.com/biz/the-occidental-cigar-club-san-francisco#hrid:jwU3v9huOtPZgsiA29YY4Q",
               "mobile_uri":"http://m.yelp.com/biz/39DgSNLIaRSxZJGAl-nmGw?srid=jwU3v9huOtPZgsiA29YY4Q",
               "text_excerpt":"Pro's: \n- Indoor smoking in the Financial District (Where else can you grab a stick, and a drink if you so incline, right after work and sit around for...",
               "user_photo_url":"http://media1.ak.yelpcdn.com/upthumb/PapmMELK_hge-P0GrTAWuw/ms",
               "date":"2011-09-06",
               "user_name":"John T.",
               "id":"jwU3v9huOtPZgsiA29YY4Q"
            },
            {
               "rating_img_url_small":"http://media2.ak.yelpcdn.com/static/20101216418129184/img/ico/stars/stars_small_4.png",
               "user_photo_url_small":"http://media1.ak.yelpcdn.com/upthumb/Eb4VjkpnopFCDZ6QVOmOYQ/ss",
               "rating_img_url":"http://media2.ak.yelpcdn.com/static/201012164084228337/img/ico/stars/stars_4.png",
               "rating":4,
               "user_url":"http://www.yelp.com/user_details?userid=s3XmVL8UT5duKjPaQp43cg",
               "url":"http://www.yelp.com/biz/the-occidental-cigar-club-san-francisco#hrid:EmWJCtIwdt_Ay5u2-ivjqg",
               "mobile_uri":"http://m.yelp.com/biz/39DgSNLIaRSxZJGAl-nmGw?srid=EmWJCtIwdt_Ay5u2-ivjqg",
               "text_excerpt":"Please never close. San Francisco municipal politicians hate indoor smoking, and apparently an adult's freedom of choice.",
               "user_photo_url":"http://media1.ak.yelpcdn.com/upthumb/Eb4VjkpnopFCDZ6QVOmOYQ/ms",
               "date":"2011-09-01",
               "user_name":"Aaron J.",
               "id":"EmWJCtIwdt_Ay5u2-ivjqg"
            }
         ],
         "photo_url_small":"http://media3.ak.yelpcdn.com/bpthumb/GpQlB2WMZKfgQdZdfxw4vw/ss"
      }
   ]
 *
 * @author jhannus
 */
var YelpLocationService = {

	ywsid: "js_nZt1ReR1aW7gPAMyZuQ",
	searchBusinessEndpoint: "http://api.yelp.com/business_review_search",

	/**
	 * Gets business review by coordinates.
	 * @param searchTerm The term to search for. i.e Food type.
	 * @param category These seem to be predefined by yelp. Leave null to omit.
	 * @param coords An object with the coordinates: {latitude: 1234, longitude: 3456 }
	 * @param radius The radius in miles for results
	 * @param limit The number of max result to return
	 */
	searchBusinessByCoords: function(searchTerm, category, coords, radius, limit, callback) {
		var t = this,
			query = "term="+escape(searchTerm)+"&lat="+coords.latitude+"&long="+coords.longitude+
				"&radius="+radius+"&limit="+limit;

		if (category != null) {
			url += "&category="+escape(category);
		}

		t.searchBusinessRequest(query, callback || "YelpLocationService.searchBusinessByLocationSuccessHandler");
	},

	/**
	 * Gets business reviews by address.
	 * @param searchTerm The term to search for. i.e Food type.
	 * @param category These seem to be predefined by yelp. Leave null to omit.
	 * @param address The address of the venue
	 * @param radius The radius in miles for results
	 * @param limit The number of max result to return
	 */
	searchBusinessByAddress: function(searchTerm, category, address, radius, limit, callback) {
		var t = this,
			query = "term="+escape(searchTerm)+"&location="+escape(address)+
				"&radius="+radius+"&limit="+limit;

		if (category != null) {
			url += "&category="+escape(category);
		}

		t.searchBusinessRequest(query, callback || "YelpLocationService.searchBusinessByLocationSuccessHandler");
	},

	/**
	 * Success: "message":{"text":"OK","code":0......
	 * Error: "message":{"text":"Unknown category specified","code":205......
	 */
	isResponseSuccess: function(response) {
		return (response != null && response.message != null && response.message.code == 0);
	},

	/**
	 * Default response handler.
	 */
	searchBusinessByLocationSuccessHandler: function(response) {
		var t = this;
		if (t.isResponseSuccess(response)) {
			// draw elements on ui...
			alert(response.message.text);
		} else {
			alert("Error fetching results: "+response);
		}
	},

	/**
	 * Makes the api request. uses the jsonp approach to avoid cross-domian issues which will
	 * write a script node to the dom and on load it will call the callback function. The callback
	 * function must be a string and can be a global, static, or instance method as long as it in scope.
	 */
	searchBusinessRequest: function(query, callback) {
		var t = this;
		var requestConfig = {
            type: "GET",
            url: t.searchBusinessEndpoint+"?"+query+"&ywsid="+t.ywsid,
            dataType: "jsonp",
            jsonp : "callback",
            jsonpCallback: callback
        };

	    $.ajax(requestConfig);
	}

};
