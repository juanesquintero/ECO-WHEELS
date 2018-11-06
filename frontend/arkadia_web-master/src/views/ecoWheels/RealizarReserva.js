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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";

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
      open: false
    };

    this.crearReserva = this.crearReserva.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ open: false });
  }

  crearReserva(e) {
    e.preventDefault();
    var date = new Date().toLocaleString();

    axios
      .post(`${API_URL}/reservas`, {
        fecha_reserva: date,
        fecha_pago: this.state.fecha_pago,
        fecha_prestamo: this.state.fecha_prestamo,
        medio_pago: this.state.medio_pago,
        monto: this.state.monto,
        estacion: this.state.estacion,
        cicla: this.state.cicla,
        usuario: this.state.usuario
      })
      .then(res => {
        this.setState({
          fecha_reserva: "",
          fecha_pago: "",
          fecha_prestamo: "",
          medio_pago: "",
          monto: 0,
          estacion: "",
          cicla: "",
          usuario: "",
          open: true
        });
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={this.state.open}
          onClose={this.handleClose}
          message={<span id="message-id">Reserva realizada con exito</span>}
        />
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              Reserva
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="station">Estacion</InputLabel>
                <Input
                  id="station"
                  name="estacion"
                  autoFocus
                  value={this.state.estacion}
                  onChange={e => this.setState({ estacion: e.target.value })}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="medio_pago">Medio de Pago</InputLabel>
                <Select
                  id="medio_pago"
                  name="medio_pago"
                  Value={this.state.medio_pago}
                  onChange={e =>
                    this.setState({
                      monto: e.target.value,
                      medio_pago: e.target.selectedIndex
                    })
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem name="Tarjeta" value={1700}>
                    Tarjeta
                  </MenuItem>
                  <MenuItem name="Efectivo" value={1500}>
                    Efectivo
                  </MenuItem>
                  <MenuItem name="Civica" value={1000}>
                    Civica
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="monto">Monto a Pagar</InputLabel>
                <Input
                  id="monto"
                  name="monto"
                  value={this.state.monto}
                  onChange={e => this.setState({ monto: e.target.value })}
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.crearReserva}
              >
                Crear Reserva
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
