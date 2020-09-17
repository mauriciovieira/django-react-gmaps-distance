import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Badge } from 'shards-react';
import axios from 'axios';

require('dotenv').config()

const key = process.env.REACT_APP_GMAPS_API;
const libraries = ['places'];
const MapContainerStyle = {
  width: '60vw',
  height: '60vh',
};
const zoom = 12;


export default function MapContainer(props) {
  const [markers, setMarkers] = useState([]);
  const [distance, setDistance] = useState('0.0');
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
    libraries,
  });

  const postMarkers = (markers) => {
    axios
      .post('/markers', markers)
      .then(({ data }) => { setDistance(data.distance) })
      .catch(err => console.log(err))
  }

  const onMapClick = (event) => {
    // Always keep up to 2 markers
    if (markers.length === 2) {
      setMarkers((current) => [
        current[1]
      ]);
    }

    const marker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date(),
    }

    setMarkers((current) => [
      ...current,
      marker,
    ]);
  };

  useEffect(() => {
    if (markers.length === 2) {
      postMarkers(markers);
    }
  }, [markers]);

  const { clear, resetClear } = props;

  useEffect(() => {
    if (clear) {
      setMarkers([]);
      setDistance('0.0');
      resetClear();
    }
  }, [clear, resetClear]);


  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <>
      <GoogleMap
        mapContainerStyle={MapContainerStyle}
        zoom={zoom}
        center={props.center}
        onClick={onMapClick}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>

      <Badge outline theme="primary" className="m-2 distance" id="distance">
        {distance}
      </Badge>
    </>
  );
}

MapContainer.defaultProps = {
  center: {},
  clear: false,
};

MapContainer.propTypes = {
  center: PropTypes.object,
  clear: PropTypes.bool,
  setClear: PropTypes.func,
};
