import {
  GoogleMap, useLoadScript, MarkerClusterer, Marker,
} from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';
import OneMarker from './Marker';

const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;
const iconimage = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
const options = {
  clickableIcons: false,
  mapId: 'e263c88944c4840d',
};

function LoadMap({
  longitude, latitude, title, chefData,
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });

  if (!isLoaded) return <div>Map Loading...</div>;
  return <Map longitude={longitude} latitude={latitude} title={title} chefData={chefData} />;
}

function Map({
  longitude, latitude, title, chefData,
}) {
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), []);
  console.log(center);
  return (
    <GoogleMap
      mapContainerClassName="mapcontainer"
      zoom={13}
      options={options}
      center={center}
    >

      {
        chefData.map((chef) => <OneMarker key={chef.id} chef={chef} />)
      }
      <Marker key={0} title={title} icon={iconimage} position={center} />
    </GoogleMap>
  );
}

export { LoadMap };
export { Map };
