import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 23.024259,
    lng: 72.567622,
  },
  zoom: 14,
}

const GoogleMap = () => (
  <div style={{ height: '35vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBfTkf7ZJoHR9hN3KeNdpOGX9hj4XDO7sA' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
    </GoogleMapReact>
  </div>
)

export default GoogleMap
