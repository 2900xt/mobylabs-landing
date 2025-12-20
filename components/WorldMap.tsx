"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";

interface Buoy {
  id: number;
  name: string;
  lat: number;
  lng: number;
  whaleProbability: number;
}

export default function WorldMap() {
  const [buoys, setBuoys] = useState<Buoy[]>([
    { id: 1, name: "Buoy Alpha", lat: 35.6, lng: -75.3, whaleProbability: 45 },
    { id: 2, name: "Buoy Beta", lat: 42.3, lng: -70.1, whaleProbability: 62 },
    { id: 3, name: "Buoy Gamma", lat: 38.9, lng: -74.8, whaleProbability: 28 },
    { id: 4, name: "Buoy Delta", lat: 47.6, lng: -122.3, whaleProbability: 71 },
    { id: 5, name: "Buoy Epsilon", lat: 36.8, lng: -121.9, whaleProbability: 53 },
    { id: 6, name: "Buoy Zeta", lat: -33.9, lng: 151.2, whaleProbability: 89 },
    { id: 7, name: "Buoy Eta", lat: 55.7, lng: -6.2, whaleProbability: 34 },
    { id: 8, name: "Buoy Theta", lat: 64.1, lng: -21.9, whaleProbability: 76 },
  ]);

  useEffect(() => {
    // Fix for default marker icon issue in Next.js
    if (typeof window !== "undefined") {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });
    }

    // Update whale probability every 3 seconds
    const interval = setInterval(() => {
      setBuoys((prevBuoys) =>
        prevBuoys.map((buoy) => ({
          ...buoy,
          whaleProbability: Math.floor(Math.random() * 100),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getMarkerColor = (probability: number) => {
    if (probability >= 70) return "#ef4444"; // red
    if (probability >= 40) return "#f59e0b"; // orange
    return "#22c55e"; // green
  };

  const createCustomIcon = (probability: number) => {
    const color = getMarkerColor(probability);
    return L.divIcon({
      className: "custom-icon",
      html: `
        <div style="
          background-color: ${color};
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          font-size: 12px;
        ">
          ${probability}%
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
  };

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "100%", width: "100%", borderRadius: "0.75rem" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {buoys.map((buoy) => (
        <Marker
          key={buoy.id}
          position={[buoy.lat, buoy.lng]}
          icon={createCustomIcon(buoy.whaleProbability)}
        >
          <Popup>
            <div className="text-center p-2">
              <h3 className="font-bold text-lg">{buoy.name}</h3>
              <p className="text-sm text-gray-600">
                Location: {buoy.lat.toFixed(2)}°, {buoy.lng.toFixed(2)}°
              </p>
              <p className="text-lg font-bold mt-2" style={{ color: getMarkerColor(buoy.whaleProbability) }}>
                Whale Probability: {buoy.whaleProbability}%
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
