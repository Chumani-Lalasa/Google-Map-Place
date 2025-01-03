import { UserLocationContext } from '@/context/UserLocationContext'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'
import React, { useContext } from 'react'

function GoogleMapView() {
    const {userLocation, setUserLocation} = useContext(UserLocationContext)
    const containerStyle = {
        width: '100%',
        height: '500px'
    }
    const cordinate = {lat: -34.397, lng: 150.644}
    console.log(userLocation);
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={['d98ffb2796a877c0']}
      >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={userLocation}
            options={{mapId: 'd98ffb2796a877c0'}}
            zoom={12}
        >
            <MarkerF 
                position={userLocation}
                icon={{
                    url: 'user-location.png',
                    scaledSize: {
                        width: 50,
                        height: 50
                    }
                }}
            />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default GoogleMapView
