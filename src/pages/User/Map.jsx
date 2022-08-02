import { GoogleMap, useLoadScript, MarkerClusterer, Marker, Autocomplete,LoadScript } from '@react-google-maps/api';
import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
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
  longitude, latitude, title, chefData,
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
    libraries: ["places"]
  });

  if (!isLoaded) return <div>Map Loading...</div>;
  return <Map longitude={longitude} latitude={latitude} title={title} chefData={chefData} />;
}

function Map({longitude, latitude, title, chefData,}) {
  const mapRef = useRef()
  const [location,setLocation] = useState({})
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), []);
  
  const onLoad = useCallback(map=>(mapRef.current=map),[]);

  function markerCenter(chef) {
    console.log(chef)
  }
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
          zoom={13}
          options={options}
          center={center}
          onLoad={onLoad}
        >
          <Autocomplete>
          <input
              type="text"
              placeholder="Customized your placeholder"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px"
              }}
            />
          </Autocomplete>
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
