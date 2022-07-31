import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { useState, useRef, useEffect } from 'react';

const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;

function Map() {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return (
    <Wrapper key={key}>
      {map}
    </Wrapper>
  );
}

export default Map;
