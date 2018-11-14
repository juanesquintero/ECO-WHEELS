import React, { Fragment, Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const API_URL = "http://localhost:3001";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class RealizarReserva extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha_reserva: "",
      fecha_pago: "",
      fecha_prestamo: "",
      medio_pago: "",
      monto: 0,
      estacion: "",
      cicla: "",
      usuario: "",

      date: "",
      open: false,
      estaciones: []
    };

    this.crearReserva = this.crearReserva.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.getEstaciones = this.getEstaciones.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  componentDidMount() {
    this.getEstaciones();
  }

  getEstaciones() {
    axios.get(`${API_URL}/estaciones`).then(res => {
      const { data } = res;
      this.setState({
        estaciones: data
      });
    });
  }

  setDate() {
    if (this.state.estacion && this.state.medio_pago) {
      var date = new Date();
      this.setState({ fecha_reserva: date.toLocaleString() });
      var pay_date = new Date(date.getTime() + 15 * 60000);
      this.setState({ fecha_pago: pay_date.toLocaleString() });
    }
  }

  crearReserva(e) {
    e.preventDefault();
    axios
      .post(`${API_URL}/reservas`, {
        fecha_reserva: this.state.fecha_reserva,
        fecha_pago: "",
        fecha_prestamo: "",
        medio_pago: this.state.medio_pago,
        monto: this.state.monto,
        estacion: this.state.estacion,
        cicla: 1,
        usuario: 2
      })
      .then(res => {
        this.setState({
          fecha_reserva: "",
          fecha_pago: this.state.fecha_pago,
          fecha_prestamo: "",
          medio_pago: "",
          monto: 0,
          estacion: this.state.estacion,
          cicla: "",
          usuario: "",
          open: true
        });
      });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleChange() {
    switch (this.state.medio_pago) {
      case "Tarjeta":
        this.setState({ monto: 1700 });
        break;
      case "Civica":
        this.setState({ monto: 1000 });
        break;
      case "Efectivo":
        this.setState({ monto: 1500 });
        break;
      case "":
        this.setState({ monto: 0 });
        break;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <center>
            <DialogTitle id="alert-dialog-title">Reserva Realizada</DialogTitle>
          </center>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Tienes 15 min ({this.state.fecha_pago.slice(10)}) para llegar
              <br /> a la estacion <b>{this.state.estacion}</b> y realizar el
              pago.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>

        <CssBaseline />

        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              Eco Reserva
            </Typography>
            <form className={classes.form} onMouseOver={this.handleChange}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="station">Estacion</InputLabel>
                <Select
                  id="station"
                  name="estacion"
                  value={this.state.estacion}
                  onChange={e => this.setState({ estacion: e.target.value })}
                >
                  {this.state.estaciones.map(estacion => (
                    <MenuItem value={estacion.nombre}>
                      {estacion.nombre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="medio_pago">Medio de Pago</InputLabel>
                <Select
                  id="medio_pago"
                  name="medio_pago"
                  value={this.state.medio_pago}
                  onChange={e => this.setState({ medio_pago: e.target.value })}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Tarjeta"}>Tarjeta</MenuItem>
                  <MenuItem value={"Efectivo"}>Efectivo</MenuItem>
                  <MenuItem value={"Civica"}>Civica</MenuItem>
                </Select>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="monto">Monto a Pagar</InputLabel>
                <Input
                  id="monto"
                  disabled
                  name="monto"
                  value={"$" + this.state.monto}
                />
              </FormControl>
              <center>
                <FormControl margin="normal">
                  <InputLabel htmlFor="hoy">Hoy</InputLabel>
                  <Input
                    id="hoy"
                    name="hoy"
                    disabled
                    value={this.state.fecha_reserva.substring(0, 10)}
                  />
                </FormControl>

                <FormControl margin="normal">
                  <InputLabel htmlFor="fecha_reserva">
                    Hora de reserva
                  </InputLabel>
                  <Input
                    id="fecha_reserva"
                    name="fecha_reserva"
                    disabled
                    value={this.state.fecha_reserva.slice(10)}
                  />
                </FormControl>

                <FormControl margin="normal">
                  <InputLabel
                    style={{ fontWeight: "600" }}
                    htmlFor="fecha_pago"
                  >
                    Hora limite de pago
                  </InputLabel>
                  <Input
                    id="fecha_pago"
                    name="fecha_pago"
                    disabled
                    value={this.state.fecha_pago.slice(10)}
                    style={{ fontWeight: "600" }}
                  />
                </FormControl>
              </center>
              <Button
                onMouseOver={this.setDate}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.crearReserva}
              >
                Reservar
              </Button>
            </form>
          </Paper>
        </main>
      </Fragment>
    );
  }
}

RealizarReserva.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RealizarReserva);
