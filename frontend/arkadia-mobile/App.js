import React, { Component } from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/projects")
      .then(res => {
        const { data } = res;
        this.setState({
          isLoading: false,
          dataSource: data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        {/* <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>
              {item.name}: {item.description}
            </Text>
          )}
          keyExtractor={({ _id }) => _id}
        />
      </View> */}
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
