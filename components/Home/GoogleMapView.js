import { GoogleMap, LoadScript } from '@react-google-maps/api'
import React from 'react'

function GoogleMapView() {
    const containerStyle = {
        width: '100%',
        height: '500px'
    }
    const cordinate = {lat: -34.397, lng: 150.644}
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
      >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={cordinate}
            zoom={12}
        >

        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default GoogleMapView
