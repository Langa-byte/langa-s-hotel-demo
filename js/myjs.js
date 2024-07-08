$(document).ready(function(){
	$('.carousel').bcSwipe({ threshold: 50 });
	
	function blink_text() {
		$('#blinker').fadeOut(500);
		$('#blinker').fadeIn(500);
	}
	setInterval(blink_text, 1000); 
	
	function blink_button() {
		$('#blinkerButton').fadeOut(500);
		$('#blinkerButton').fadeIn(500);
	}
	setInterval(blink_button, 1000);

	if (window.location.pathname == '/accommodation') {

		let roomHTML = "";
		
		const nocache = Math.floor(Math.random() * 1000001);

		function allListings() {

			//Start Listings JSON
			jQuery.ajax({
				type: "GET",
				url: "js/zb-properties.json?nocache="+nocache,
				success: function(result) {
					console.log("js/zb-properties.json?nocache="+nocache);
					console.log(result);
					
					let villaCount = 0;
					
					jQuery.each(result.villas , function(index, theHotelRooms) {

							if (result.villas[villaCount].liveStatus) {
								roomHTML += '<div class="row">';
								roomHTML += '	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">';
								roomHTML += '		<a href="'+result.villas[villaCount].url+'"><img src="'+result.villas[villaCount].mainPic+'" class="img-rounded" alt="Zimbali Accommodation" border="0"></a>';
								roomHTML += '	</div>';
								roomHTML += '	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">';
								roomHTML += '		<h3>'+result.villas[villaCount].roomName+'</h3>';
								roomHTML += '		<p><strong>'+result.villas[villaCount].bedrooms+' Bedroooms.</strong> '+result.villas[villaCount].sleeps+'</p>';
								roomHTML += '		<p><strong>Features:</strong> '+result.villas[villaCount].features+'</p>';
								roomHTML += '		<a class="btn btn-success btn-lg" href="'+result.villas[villaCount].url+'" role="button">SEE MORE</a>';
								roomHTML += '	</div>';
								roomHTML += '</div>';
								roomHTML += '<div class="row">';
								roomHTML += '	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">';
								roomHTML += '		<img src="images/separator.jpg" alt="" border="0">';
								roomHTML += '	</div>';
								roomHTML += '</div>';
								
							}
							villaCount++;
						
					});					
					
					document.getElementById('results').innerHTML = roomHTML;
					
				},
				error: function(result) {
					console.error(result);
				}
			});  //Close Listings JSON				
			
		}
		
		allListings();

    }

	if (window.location.pathname == '/3-bedroom-zimbali-rentals') {

		let roomHTML = "";
		
		const nocache = Math.floor(Math.random() * 1000001);

		function all3BedroomListings() {

			//Start Listings JSON
			jQuery.ajax({
				type: "GET",
				url: "js/zb-properties.json?nocache="+nocache,
				success: function(result) {
					console.log("js/zb-properties.json?nocache="+nocache);
					console.log(result);
					
					let villaCount = 0;
					
					jQuery.each(result.villas , function(index, theHotelRooms) {

							if (result.villas[villaCount].liveStatus && (result.villas[villaCount].bedrooms == 3)) {
								roomHTML += '<div class="row">';
								roomHTML += '	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">';
								roomHTML += '		<a href="'+result.villas[villaCount].url+'"><img src="'+result.villas[villaCount].mainPic+'" class="img-rounded" alt="Zimbali Accommodation" border="0"></a>';
								roomHTML += '	</div>';
								roomHTML += '	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">';
								roomHTML += '		<h3>'+result.villas[villaCount].roomName+'</h3>';
								roomHTML += '		<p><strong>'+result.villas[villaCount].bedrooms+' Bedroooms.</strong> '+result.villas[villaCount].sleeps+'</p>';
								roomHTML += '		<p><strong>Features:</strong> '+result.villas[villaCount].features+'</p>';
								roomHTML += '		<a class="btn btn-success btn-lg" href="'+result.villas[villaCount].url+'" role="button">SEE MORE</a>';
								roomHTML += '	</div>';
								roomHTML += '</div>';
								roomHTML += '<div class="row">';
								roomHTML += '	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">';
								roomHTML += '		<img src="images/separator.jpg" alt="" border="0">';
								roomHTML += '	</div>';
								roomHTML += '</div>';
								
							}
							villaCount++;
						
					});					
					
					document.getElementById('results').innerHTML = roomHTML;
					
				},
				error: function(result) {
					console.error(result);
				}
			});  //Close Listings JSON				
			
		}
		
		all3BedroomListings();

    }

	if (window.location.pathname == '/4-bedroom-zimbali-rentals') {

		let roomHTML = "";
		
		const nocache = Math.floor(Math.random() * 1000001);

		function all4BedroomListings() {

			//Start Listings JSON
			jQuery.ajax({
				type: "GET",
				url: "js/zb-properties.json?nocache="+nocache,
				success: function(result) {
					console.log("js/zb-properties.json?nocache="+nocache);
					console.log(result);
					
					let villaCount = 0;
					
					jQuery.each(result.villas , function(index, theHotelRooms) {

							if (result.villas[villaCount].liveStatus && (result.villas[villaCount].bedrooms == 4)) {
								roomHTML += '<div class="row">';
								roomHTML += '	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">';
								roomHTML += '		<a href="'+result.villas[villaCount].url+'"><img src="'+result.villas[villaCount].mainPic+'" class="img-rounded" alt="Zimbali Accommodation" border="0"></a>';
								roomHTML += '	</div>';
								roomHTML += '	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">';
								roomHTML += '		<h3>'+result.villas[villaCount].roomName+'</h3>';
								roomHTML += '		<p><strong>'+result.villas[villaCount].bedrooms+' Bedroooms.</strong> '+result.villas[villaCount].sleeps+'</p>';
								roomHTML += '		<p><strong>Features:</strong> '+result.villas[villaCount].features+'</p>';
								roomHTML += '		<a class="btn btn-success btn-lg" href="'+result.villas[villaCount].url+'" role="button">SEE MORE</a>';
								roomHTML += '	</div>';
								roomHTML += '</div>';
								roomHTML += '<div class="row">';
								roomHTML += '	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">';
								roomHTML += '		<img src="images/separator.jpg" alt="" border="0">';
								roomHTML += '	</div>';
								roomHTML += '</div>';
								
							}
							villaCount++;
						
					});					
					
					document.getElementById('results').innerHTML = roomHTML;
					
				},
				error: function(result) {
					console.error(result);
				}
			});  //Close Listings JSON				
			
		}
		
		all4BedroomListings();

    }

	if (window.location.pathname == '/5-bedroom-zimbali-rentals') {

		let roomHTML = "";
		
		const nocache = Math.floor(Math.random() * 1000001);

		function all5BedroomListings() {

			//Start Listings JSON
			jQuery.ajax({
				type: "GET",
				url: "js/zb-properties.json?nocache="+nocache,
				success: function(result) {
					console.log("js/zb-properties.json?nocache="+nocache);
					console.log(result);
					
					let villaCount = 0;
					
					jQuery.each(result.villas , function(index, theHotelRooms) {

							if (result.villas[villaCount].liveStatus && (result.villas[villaCount].bedrooms == 5)) {
								roomHTML += '<div class="row">';
								roomHTML += '	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">';
								roomHTML += '		<a href="'+result.villas[villaCount].url+'"><img src="'+result.villas[villaCount].mainPic+'" class="img-rounded" alt="Zimbali Accommodation" border="0"></a>';
								roomHTML += '	</div>';
								roomHTML += '	<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">';
								roomHTML += '		<h3>'+result.villas[villaCount].roomName+'</h3>';
								roomHTML += '		<p><strong>'+result.villas[villaCount].bedrooms+' Bedroooms.</strong> '+result.villas[villaCount].sleeps+'</p>';
								roomHTML += '		<p><strong>Features:</strong> '+result.villas[villaCount].features+'</p>';
								roomHTML += '		<a class="btn btn-success btn-lg" href="'+result.villas[villaCount].url+'" role="button">SEE MORE</a>';
								roomHTML += '	</div>';
								roomHTML += '</div>';
								roomHTML += '<div class="row">';
								roomHTML += '	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">';
								roomHTML += '		<img src="images/separator.jpg" alt="" border="0">';
								roomHTML += '	</div>';
								roomHTML += '</div>';
								
							}
							villaCount++;
						
					});					
					
					document.getElementById('results').innerHTML = roomHTML;
					
				},
				error: function(result) {
					console.error(result);
				}
			});  //Close Listings JSON				
			
		}
		
		all5BedroomListings();

    }
	
});