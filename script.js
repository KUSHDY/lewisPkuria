var mymap = L.map('map').setView([-0.4832, 37.1274], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	maxZoom: 18
}).addTo(mymap);

var marker = L.marker([-0.4832, 37.1274]).addTo(mymap);
marker.bindPopup("<b>Lewis Kuria is a jkuat student!!!</b><br>This is his home.").openPopup();
