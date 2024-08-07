import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import { useEffect, useRef } from "react";
import { useBusinessContext } from "../../context/BusinessContext";
import { Icon, Marker as LeafletMarker } from "leaflet";
import LocateControl from "../LocateControl/LocateControl";
import isOpenNow from "../../utils/isOpen";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Map() {
  const businessContext = useBusinessContext();

  if (!businessContext) {
    return null;
  }
  const { filteredBusinesses, businessId } = businessContext;

  const markerRefs = useRef<{ [key: string]: LeafletMarker | null }>({});

  useEffect(() => {
    businessId && markerRefs.current[businessId]?.openPopup();
  }, [businessId]);

  const customIcon = new Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const cologneBounds: [[number, number], [number, number]] = [
    [50.83, 6.827], // Southwest coordinates
    [51.04, 7.085], // Northeast coordinates
  ];

  return (
    <MapContainer
      center={[50.94122163874258, 6.9585201430740256]}
      zoom={13}
      scrollWheelZoom={true}
      maxBounds={cologneBounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        attribution="&copy; Google Maps"
        url="https://www.google.com/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />

      {filteredBusinesses.map((b) => {
        const isOpen = isOpenNow(b.openingHours);
        return (
          <div data-cy={b._id}>
            <Marker
              key={b._id}
              position={[b.coordinates.lat, b.coordinates.lng]}
              icon={customIcon}
              ref={(markerDomEL) => (markerRefs.current[b._id] = markerDomEL)}
            >
              <Popup className="popup">
                <div>
                  <img className="popup__img" src={b.images[0]} alt={b.name} />
                  <h4>{b.name}</h4>
                  <span>{b.category}</span>
                  <p className={isOpen ? "open" : "closed"}>
                    {isOpen ? "Open now" : "Closed now"}
                  </p>
                  <p>{b.contactInfo}</p>
                  <p>{b.address}</p>
                </div>
                <Button
                  className="popup__btn"
                  component={Link}
                  to={"/id/" + b._id}
                  variant="contained"
                  endIcon={<ArrowOutwardIcon />}
                >
                  Details
                </Button>
              </Popup>
            </Marker>
          </div>
        );
      })}
      <LocateControl />
    </MapContainer>
  );
}
