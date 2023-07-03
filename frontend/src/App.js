import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [locations, setLocations] = useState([]);
  const [points, setPoints] = useState([]);
  const mapRef = useRef(null);
  const mapInstance = useRef(null); // Keep track of the map instance

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-map');

        const { locations, points } = response.data;

        console.log('locations:', locations);
        console.log('points:', points);

        setLocations(locations.features);
        setPoints(points.features);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!mapInstance.current && mapRef.current) {
      // Initialize the map if it hasn't been initialized yet
      mapInstance.current = L.map(mapRef.current).setView([0, 0], 2);

      // Add a tile layer to the map
      L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://maps.stamen.com/terrain/">Stamen</a>',
        maxZoom: 18
      }).addTo(mapInstance.current);
    }
  }, []);

  useEffect(() => {
    // Clear previous markers
    mapInstance.current?.eachLayer((layer) => {
      mapInstance.current.removeLayer(layer);
    });

    // Add the locations to the map as polygons
    locations.forEach((feature) => {
      const coordinates = feature.geometry.coordinates[0].map(([longitude, latitude]) => [latitude, longitude]);
      L.polygon(coordinates).addTo(mapInstance.current);
    });

    // Add the points to the map as markers
    points.forEach((feature) => {
      const [longitude, latitude] = feature.geometry.coordinates;
      L.marker([latitude, longitude]).addTo(mapInstance.current);
    });
  }, [locations, points]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
