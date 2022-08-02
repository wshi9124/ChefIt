import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo, useState, useRef, useCallback } from 'react';
import OneMarker from './Marker';
import Places from './Places';

const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;
const iconimage = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
const options = {
  clickableIcons: false,
  mapId: 'e263c88944c4840d',
  disableDefaultUI: true
};

function LoadMap({
  longitude, latitude, title, chefData,location,setLocation,zoom
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });

  if (!isLoaded) return <div>Map Loading...</div>;
  return <Map zoom={zoom}setLocation={setLocation} longitude={longitude} location={location} latitude={latitude} title={title} chefData={chefData} />;
}

function Map({longitude, latitude, title, chefData,location,setLocation,zoom}) {
  const mapRef = useRef()
  
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), []);

  const onLoad = useCallback(map=>(mapRef.current=map),[]);

  function markerCenter(chef) {
    setLocation({lat:chef.latitude,lng:chef.longitude})
  }
  console.log(zoom)
  
  return ( 
    <>
      {/* <div className='controls'>
        <Places setLocation={(position) => {
          setLocation(position)
          mapRef.current.panTo(position); 
        }} />
      </div> */}
      <div className="map">
        <GoogleMap 
          mapContainerClassName="mapcontainer"
          zoom={zoom}
          options={options}
          center={location}
          onLoad={onLoad}
        >
          {
            chefData.map((chef) => <OneMarker key={chef.id} chef={chef} markerCenter={markerCenter} />)
          }
          <Marker key={0} title={title} icon={iconimage} position={center}/>
        </GoogleMap>
      </div>
    </>
  );
}

export { LoadMap };
export { Map };
