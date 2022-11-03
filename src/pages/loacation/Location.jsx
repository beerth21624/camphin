import React, { useState } from 'react'
import Map from 'react-map-gl'
import Navbar from '../../components/navbar/Navbar'

const Location = () => {
  const [viewport, setViewport] = useState({
    latitude: 13.7649136,
    longitude: 100.5360959,
    zoom: 6,
  })
  const TOKEN =
    'pk.eyJ1IjoiYmVlcnRoMjE2MjQiLCJhIjoiY2txMjl0MWM2MG1tNjJ4cWlzemo3aTdhYiJ9.5tvcyFXJ0n15Vxh8R1l1lA'

  return (
    <>
      <Navbar />
      <Map
        // {...viewport}
        transitionDuration="200"
        mapboxAccessToken={TOKEN}
        initialViewState={{ ...viewport }}
        style={{ width: '100%', height: '100vh' }}
        mapStyle="mapbox://styles/beerth21624/cla1bo4oy000i14o50m0ao248"
        onViewportChange={(viewport) => setViewport(viewport)}
      ></Map>
    </>
  )
}

export default Location
