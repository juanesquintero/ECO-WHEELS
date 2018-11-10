import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  View,
  TextInput,
  TouchableHighlight,
  Picker
} from "react-native";
import { grey } from "ansi-colors";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      estacion: "",
      medio_pago: "",
      monto: ""
    };
  }
  getSelectedPickerItem = () => {
    Alert.alert(this.state.PickerValueHolder);
  };

  changeEstacion(estacion) {
    this.setState({ estacion });
  }

  changeMonto(monto) {
    this.setState({ monto });
  }

  isPressed() {
    if (this.state.estacion && this.state.monto && this.state.medio_pago) {
      //Bien
    } else {
      //Error
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Realizar Reserva</Text>
          <TextInput
            style={styles.input}
            placeholder="Estacion"
            value={this.state.estacion}
            onChange={estacion => this.changeEstacion(estacion)}
          />
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
            style={styles.input}
            placeholder="Monto"
            value={this.state.monto}
            onChange={monto => this.changeMonto(monto)}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.isPressed()}
          >
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
    backgroundColor: "gray",
    paddingTop: 20,
    paddingBottom: 20
  },
  text_Button: {
    textAlign: "center",
    fontSize: 20
  }
});
