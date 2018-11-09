import React, { Component } from "react";
import axios from "axios";
import SimpleTable from "../../components/SimpleTable";
import Typography from "@material-ui/core/Typography";
import GoogleMapReact from "google-map-react";
import { InfoWindow, Marker } from "react-google-maps";
import PACKAGE from "../../../package.json";

import "./eco.css";

const PuntoBicicleta = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

class VisualizarEstaciones extends Component {
  static defaultProps = {
    center: {
      lat: 6.2394001,
      lng: -75.55718
    },
    zoom: 13.2
  };

  constructor(props) {
    super(props);

    this.state = {
      estaciones: [],
      isOpen: false
    };

    this.getEstaciones = this.getEstaciones.bind(this);
  }

  getEstaciones() {
    axios.get("http://localhost:3001/estaciones/").then(res => {
      const { data } = res;
      this.setState({
        estaciones: data
      });
    });
  }

  componentDidMount() {
    this.getEstaciones();
  }

  render() {
    //console.log(this.state.estaciones);
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Visualizar Estaciones
        </Typography>

        <div className="ecoWheels-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAHbC2zuS8DRYn6zOCre5z5r0iZhW16kV8"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.state.estaciones.map(estacion => (
              <Marker
                key={estacion.nombre}
                lat={estacion.lat}
                lng={estacion.lng}
                text={estacion.nombre}
                onClick={console.log("Clicked")}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default VisualizarEstaciones;
