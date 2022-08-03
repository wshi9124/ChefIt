import React, { useState } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { NavLink } from 'react-router-dom';

function OneMarker({ markerCenter, chef = {} }) {

  const [isOpen, setOpen] = useState(false);

  function handleOpen() {
    markerCenter(chef)
    setOpen(true);
  }
  return (
    <Marker
      onClick={handleOpen}
      position={{ lat: chef.latitude, lng: chef.longitude }}
    >
      { isOpen
        ? (
          <InfoWindow onCloseClick={() => setOpen(false)}>
            <>
            <NavLink style={{textDecoration:"none",color:"black"}} to ={"/viewchef"}>
                <h1>{ `${chef.first_name} ${chef.last_name}`}</h1>
                <p>
                  {' '}
                  $
                  {chef.chef_price}
                  0
                </p>
                <p>{chef.email}</p>
              </NavLink>
            </>
          </InfoWindow>
        )
        : null }
    </Marker>
  );
}

export default OneMarker;
