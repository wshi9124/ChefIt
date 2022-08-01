import { Marker, InfoWindow } from "@react-google-maps/api"
import { useState } from "react"

function OneMarker({chef={}}) {

    const [isOpen,setOpen] = useState(false)

    function handleOpen() {
        setOpen(!isOpen)
    }
    return (
        <Marker onClick={handleOpen}
            position={{lat:chef.latitude,lng:chef.longitude}}>
            { isOpen ?
            <InfoWindow onCloseClick={()=>setOpen(false)}>
                <>
                <h1>{ chef.first_name + " " + chef.last_name}</h1>
                <p> ${chef.chef_price}0</p>
                <p>{chef.email}</p>
                </>
            </InfoWindow>
           : null }
        </Marker>
    )

}


export default OneMarker