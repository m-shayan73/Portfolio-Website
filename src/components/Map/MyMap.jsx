import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [24.9253, 67.0970]

const Map = () => {
  return (
    <>
      <MapContainer center={[24.92536676174619, 67.09702807052275]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>I am Here!</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
