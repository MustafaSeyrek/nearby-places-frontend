import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Circle, Popup } from "react-leaflet";

export default function Map() {
  const [lat, setLat] = useState(37.874641);
  const [lon, setLon] = useState(32.493156);
  const [radius, setRadius] = useState(1000);
  const [popup, setPopup] = useState("No information");
  const [query, setQuery] = useState({
    latitude: null,
    longitude: null,
    radius: null,
  });

  const onInputChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {};

  return (
    <div style={{ display: "flex" }}>
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        style={{ height: "80vh", width: "50vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}>
          <Popup>{popup}</Popup>
        </Marker>
        <Circle center={[lat, lon]} radius={radius}></Circle>
      </MapContainer>
      <div className="mx-3">
        <form onSubmit={() => onSubmit()}>
          <div className="form-group row mt-3">
            <label htmlFor="latitude" className="col-sm-3 col-form-label">
              Latitude:
            </label>
            <div className="col-sm-9">
              <input
                required
                type="number"
                className="form-control"
                id="latitude"
                placeholder="Latitude"
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <label htmlFor="longitude" className="col-sm-3 col-form-label">
              Longitude:
            </label>
            <div className="col-sm-9">
              <input
                required
                type="number"
                className="form-control"
                id="longitude"
                placeholder="Longitude"
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <label htmlFor="radius" className="col-sm-3 col-form-label">
              Radius:
            </label>
            <div className="col-sm-9">
              <input
                required
                type="number"
                className="form-control"
                id="radius"
                placeholder="Radius"
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div className="form-group row mt-3">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
