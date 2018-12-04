import React,{Component} from "react";
import FlashMessage, {showMessage} from "react-native-flash-message";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";


class Home extends Component{
    render() {
        return(
            <View style={styles.container}>

            <Text style={styles.title}>Eco Wheels</Text>
            
            <TouchableHighlight
              style={styles.button}
              onPress={()=> this.props.navigation.navigate("Reserva")}
            >
              <Text style={styles.text_Button}>Reservar</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.button}
              onPress={()=> this.props.navigation.navigate("Estaciones")}
            >
              <Text style={styles.text_Button}>Estaciones</Text>
            </TouchableHighlight>

            </View>
        );
    }
}

export default Home;

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
