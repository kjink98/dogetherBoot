/* global kakao */
import React, { useEffect } from 'react';

const KakaoMap = ({ address, pname }) => {
  const addr = address;
  const pnam = pname;
  const initMap = () => {
    kakao.maps.load(() => {
      var container = document.getElementById('map');
      var options = {
        center: new kakao.maps.LatLng(37.0, 127.1067686),
        level: 3
      };
      var map = new kakao.maps.Map(container, options);
      var geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(addr, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          var message = 'latlng : new kakao.maps.LatLng(' + result[0].y + ', ';
          message += result[0].x + ')'

          var resultDiv = document.getElementById('clickLatlng');
          resultDiv.innerHTML = message;

          var marker = new kakao.maps.Marker({
            map: map,
            position: coords
          });
          var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${pnam}</div>`
          });
          infowindow.open(map, marker);

          map.setCenter(coords);

          setTimeout(function(){ map.relayout();map.setCenter(coords); }, 1000);
        }
      })
    })
  };

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.onload = () => kakao.maps.load(initMap());
      script.src = "http://dapi.kakao.com/v2/maps/sdk.js?appkey=dd75f59486cdfe462100e0ac5ea0ed2d&autoload=false&libraries=services"
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "640px", height: "360px" }}></div>
    </div>
  )
}

export default KakaoMap;