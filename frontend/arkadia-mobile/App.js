import React from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  TouchableHighlight,
  Picker
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { hidden } from "ansi-colors";

const API_URL = "http://localhost:3001";

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
      estacion: "",
      medio_pago: "",
      monto: 0,
      open: false,
      url: "http://192.168.0.14:3001/estaciones"
    };
    this.getEstaciones = this.getEstaciones.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.crearReserva = this.crearReserva.bind(this);
  }

  componentDidMount() {
    this.getEstaciones();
  }

  getEstaciones = () => {
    this.setState({ loading: true });
    fetch(this.state.url)
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

  handleClose() {
    this.setState({ open: false });
  }

  getSelectedPickerItem = () => {
    Alert.alert(this.state.medio_pago);
  };

  changeMonto(monto) {
    this.setState({ monto });
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
    Alert.alert("Boton press");
  }

  handleClose() {
    this.setState({ open: false });
  }

  isPressed() {
    if (this.state.estacion) {
      Alert.alert("Reserva realizada");
    } else {
      Alert.alert("Error");
    }
  }

  render() {
    if (this.state.loading) {
      <View style={styles.container}>
        <Text>Obteniendo estaciones</Text>
      </View>;
    }

    return (
      // view principal
      <View style={{ flex: 1, paddingTop: 50, paddingLeft: 5 }}>
        {/* Flatlist */}
        {/* <FlatList
          style={{ height: 20, alignSelf: "center" }}
          data={this.state.estaciones}
          renderItem={
            ({ item }) => <Text>{item.nombre}, {item.direccion}</Text>
          }
          keyExtractor={(item) => item._id}
        /> */}
        <View isPressed={this.handleChange}>
          <Text style={styles.title}>Realizar Reserva</Text>
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
          <Picker
            style={styles.input}
            selectedValue={this.state.medio_pago}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ medio_pago: itemValue })
            }
          >
            <Picker.Item label="None" value="None" />
            <Picker.Item label="Efectivo" value="Efectivo" />
            <Picker.Item label="Civica" value="Civica" />
            <Picker.Item label="Tarjeta" value="Tarjeta" />
          </Picker>
          <TextInput
            editable={false}
            style={styles.input}
            placeholder="Monto"
            keyboardType="numeric"
            value={this.state.monto}
            onChange={monto => this.changeMonto(monto)}
          />
          {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                title='Reservar'
                onClick={this.crearReserva}
              >
              </Button> */}
          <TouchableHighlight style={styles.button} onPress={this.crearReserva}>
            <Text style={styles.text_Button}>Enviar</Text>
          </TouchableHighlight>
        </View>
        {/* Button */}
        {/* <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    margin: 20
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 5
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 2,
    marginBottom: 20
  },
  button: {
    backgroundColor: "blue",
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center"
  },
  text_Button: {
    textAlign: "center",
    fontSize: 20
  }
});
