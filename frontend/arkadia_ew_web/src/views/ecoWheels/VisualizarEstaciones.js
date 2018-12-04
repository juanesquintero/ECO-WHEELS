import React, { Component } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import GoogleMapReact from "google-map-react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./eco.css";

const API_URL = "http://localhost:3001";

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
      estacion: {
        nombre: "Vacio",
        ciclas: 0,
        parking: 0,
        direccion: "vacio",
        descripcion: "Vacio"
      },
      open: false
    };

    this.getEstaciones = this.getEstaciones.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeStation = this.changeStation.bind(this);
  }

  getEstaciones() {
    axios.get(`${API_URL}/estaciones`).then(res => {
      const { data } = res;
      this.setState({
        estaciones: data
      });
    });
  }

  componentDidMount() {
    this.getEstaciones();
  }

  changeStation = station => {
    this.setState({ estacion: station });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const PuntoEstacion = ({ station }) => (
      <div
        onMouseEnter={() => this.changeStation(station)}
        onClick={this.handleClickOpen}
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
        {station.nombre}
      </div>
    );

    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Visualizar Estaciones
        </Typography>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {this.state.estacion.nombre}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Ciclas: {this.state.estacion.ciclas}
              &nbsp; - &nbsp;Parkings: {this.state.estacion.parking}
              <br />
              <hr />
              {this.state.estacion.direccion}
              <br />
              {this.state.estacion.descripcion}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              cerrar
            </Button>
          </DialogActions>
        </Dialog>

        <div className="ecoWheels-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAHbC2zuS8DRYn6zOCre5z5r0iZhW16kV8"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.state.estaciones.map(estacion => (
              <PuntoEstacion
                key={estacion.nombre}
                lat={estacion.lat}
                lng={estacion.lng}
                station={estacion}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default VisualizarEstaciones;
