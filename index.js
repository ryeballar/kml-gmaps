function initMap() {

	var elem = document.getElementById('map');

	var map = new google.maps.Map(elem, {
	});

	var layer = new google.maps.KmlLayer({
		url: 'cta.xml',
		map: map
	});

}
