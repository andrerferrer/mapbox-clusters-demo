import mapboxgl from 'mapbox-gl';

const zoomMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach((marker) => {
    bounds.extend([ marker.lng, marker.lat ])
  })
  map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
};

const addMarkersToMap = (map) => {
  const mapElement = document.getElementById('map');

  // Take the marker from the view in `app/views/restaurants/show.html.erb`
  const markers = JSON.parse(mapElement.dataset.markers);
  markers.forEach((marker) => {
    new mapboxgl.Marker()
      .setLngLat([ marker.lng, marker.lat ])
      .addTo(map);
  })

  zoomMapToMarkers(map, markers)
}


const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) {
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });

    addMarkersToMap(map)
  }
};

export { initMapbox };
