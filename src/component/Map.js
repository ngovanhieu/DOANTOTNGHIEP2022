import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map() {
    return (
        <MapContainer center={[16.054407, 108.202164]} zoom={13}
            scrollWheelZoom={false} style={{ width: "100%", height: "80%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[16.054407, 108.202164]} >
                <Popup>
                    Your location
                </Popup>
            </Marker>
        </MapContainer >
    )
}
