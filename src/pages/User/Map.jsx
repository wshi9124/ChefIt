import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const key = process.env.REACT_APP_GOOGLE_MAPS_KEY
const iconimage = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
const options = {
  clickableIcons: false,
  mapId: "ccddd10830cd3672"
}

function LoadMap({longitude,latitude,title}) {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey:key 
  });

  if (!isLoaded) return <div>Loading...</div>
  return <Map longitude={longitude}latitude={latitude} title={title}/>
}

function Map({longitude,latitude,title}) {
  const center = useMemo(()=>({lat:latitude,lng:longitude}),[]);

  return (
    <GoogleMap 
    mapContainerClassName="mapcontainer" 
    zoom={10}
    options={options} 
    center={center}>
      <Marker title={title}icon={iconimage}position={center}/>
    </GoogleMap>)
}


export {LoadMap}
export {Map}
