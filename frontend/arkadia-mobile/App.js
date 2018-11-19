import React from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Label,
  Alert,
  TextInput,
  TouchableHighlight,
  Picker
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fecha_reserva: "",
      fecha_pago: "",
      fecha_prestamo: "",
      cicla: "",
      usuario: "",
      date: "",

      loading: false,
      estaciones: [],
      medios: [],
      estacion: "",
      medio_pago: {
        nombre: "None",
        valor: 0
      },
      monto: 0,
      open: false,
      url: "http://192.168.1.16:3001"
    };
    this.getEstaciones = this.getEstaciones.bind(this);
    this.getMedios = this.getMedios.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.crearReserva = this.crearReserva.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  setDate() {
    if (this.state.estacion && this.state.medio_pago) {
      var date = new Date();
      this.setState({ fecha_reserva: date.toLocaleString() });
      var pay_date = new Date(date.getTime() + 15 * 60000);
      this.setState({ fecha_pago: pay_date.toLocaleString() });
    }
  }

  componentDidMount() {
    this.getEstaciones();
    this.getMedios();
  }

  getMedios() {
    this.setState({ loading: true });
    fetch(`${this.state.url}/medios`)
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        this.setState({
          medios: resJson
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getEstaciones = () => {
    this.setState({ loading: true });
    fetch(`${this.state.url}/estaciones`)
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        this.setState({
          estaciones: resJson
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleChange() {
    this.setState({ monto: this.state.medio_pago["valor"] });
  }

  handleClose() {
    this.setState({ open: false });
  }

  getSelectedPickerItem = () => {
    Alert.alert(this.state.medio_pago["nombre"]);
  };

  changeMonto(monto) {
    this.setState({ monto });
  }

  crearReserva(e) {
    e.preventDefault();
    axios
      .post(`${this.state.url}/reservas`, {
        fecha_reserva: this.state.fecha_reserva,
        fecha_pago: "",
        fecha_prestamo: "",
        medio_pago: this.state.medio_pago["nombre"],
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
          medio_pago: {
            nombre: "None",
            valor: 0
          },
          monto: 0,
          estacion: this.state.estacion,
          cicla: "",
          usuario: "",
          open: true
        });
      });
    Alert.alert("¡Reserva exitosa!");
  }

  handleClose() {
    this.setState({ open: false });
  }

  onBlur() {
    console.log("#####: onBlur");
  }

  render() {
    if (this.state.loading) {
      <View style={styles.container}>
        <Text>Obteniendo estaciones</Text>
      </View>;
    }
    return (
      // view principal
      <View style={styles.MainContainer}>
        <View style={styles.BarContainer}>
          <Text style={styles.text_Title}>Eco Wheels</Text>
        </View>
        <View style={styles.container} isPressed={this.handleChange}>
          <Text style={styles.title}>Reserva</Text>
          <Text style={styles.labelInput}>Estacion*</Text>
          <Picker
            style={styles.input}
            selectedValue={this.state.estacion}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ estacion: itemValue })
            }
          >
            {this.state.estaciones.map(estacion => (
              <Picker.Item label={estacion.nombre} value={estacion.nombre} />
            ))}
          </Picker>
          <Text style={styles.labelInput}>Medio de Pago*</Text>
          <Picker
            style={styles.input}
            selectedValue={this.state.medio_pago}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ medio_pago: itemValue })
            }
          >
            {this.state.medios.map(medio => (
              <Picker.Item label={medio.nombre} value={medio} />
            ))}
          </Picker>
          <Text style={styles.labelInput}>Monto*</Text>
          <TextInput
            // editable={false}
            style={styles.input}
            keyboardType="numeric"
            value={this.state.monto}
            onChange={monto => this.changeMonto(monto)}
          />
          <TouchableHighlight style={styles.button} onPress={this.crearReserva}>
            <Text style={styles.text_Button}>Enviar</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    marginBottom: 40,
    paddingTop: 30,
    paddingLeft: 40,
    paddingRight: 40
  },
  MainContainer: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40
  },
  BarContainer: {
    backgroundColor: "#3157BB",
    padding: 20,
    marginTop: 4
  },
  text_Title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff"
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 35
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 2,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#3157BB",
    padding: 10,
    borderRadius: 7,
    justifyContent: "center"
  },
  text_Button: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff"
  },
  labelInput: {
    fontSize: 15,
    color: "#DCDCDC"
  },
  formInput: {
    borderBottomWidth: 1.5,
    marginLeft: 20,
    borderColor: "#333"
  },
  input: {
    borderWidth: 0,
    marginBottom: 10,
    marginLeft: 2
  }
});
