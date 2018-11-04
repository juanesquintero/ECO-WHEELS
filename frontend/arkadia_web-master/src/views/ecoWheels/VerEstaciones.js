import React, { Component } from "react";
import axios from "axios";
import SimpleTable from "../../components/SimpleTable";
import Typography from "@material-ui/core/Typography";

const API_URL = "http://localhost:3001";

class VerEstaciones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      estaciones: []
    };
    this.getEstaciones = this.getEstaciones.bind(this);
  }

  componentDidMount() {
    this.getEstaciones();
  }

  getEstaciones() {
    axios.get(`${API_URL}/estaciones`).then(res => {
      const { data } = res;
      console.log(data);
      this.setState({
        estaciones: data
      });
    });
  }

  render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Estaciones
        </Typography>
        <div>
          <SimpleTable
            lista={this.state.estaciones}
            columns={[
              "nombre",
              "dispo_ciclas",
              "dispo_park",
              "direccion",
              "descripcion"
            ]}
          />
        </div>
      </div>
    );
  }
}

export default VerEstaciones;
