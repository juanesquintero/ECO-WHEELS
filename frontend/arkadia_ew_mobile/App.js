import React from "react";
import {StyleSheet} from "react-native";
import {createStackNavigator,createAppContainer} from "react-navigation"
import RealizarReserva from "./screens/RealizarReserva";
import HomeScreen from "./screens/HomeScreen";
import EstacionesScreen from "./screens/VisualizarEstaciones"


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){    
    return(
      <AppContainer/>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home : HomeScreen,
  Reserva: RealizarReserva,
  Estaciones: EstacionesScreen
})

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    marginBottom: 40,
    padding: 15,
    paddingLeft: 38,
    paddingRight: 35,
    borderRadius: 5
  },
  MainContainer: {
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40
  },
  BarContainer: {
    backgroundColor: "#3157BB",
    padding: 12
  },
  text_Title: {
    textAlign: "left",
    fontSize: 23,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 20
  },
  title: {
    textAlign: "center",
    fontSize: 23,
    marginBottom: 25
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 2,
    marginBottom: 15
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
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
    fontSize: 14,
    color: "#808080"
  },
  formInput: {
    borderBottomWidth: 1.5,
    borderColor: "#333"
  },
  input: {
    borderWidth: 0,
    marginBottom: 10,
    marginLeft: 2
  },
  statusBar: {
    height: 30
  }
});
