
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  });

  const mapRef = React.useRef(null);

  const onMapLoad = React.useCallback(map => {
    mapRef.current = map;
  }, []);

  if (loadError) return 'Error';

  return (
    <div>
      <div className="mt-[100px]">
        <GoogleMap
          mapContainerStyle={{
            height: '800px',
          }}
          center={selectedLocation}
          zoom={13}
          onLoad={onMapLoad}
        >
          {/* Add your markers here */}
        </GoogleMap>
      </div>
    </div>
  );
};

export default map;
