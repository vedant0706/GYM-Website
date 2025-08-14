import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const shopLocation = { lat: 16.67997666561727, lng: 74.17078623646478 }; // shop's exact coordinates 

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBOF6mBb44uCxt0u8LW6oz6zZhi9gRq3T8&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: shopLocation,
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: shopLocation,
        map,
        title: 'SP-Fitness-World', 
      });
    };

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return( 
    <div>
    <section className="flex flex-row items-center justify-center">
        <div id="map" className="border-5 border-solid border-transparent rounded-lg w-[1000px] h-[600px]"></div>

        
    </section>
    

    </div>
)
};

export default MapComponent;
