import React,{Component} from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableHighlight,
  Picker
} from "react-native";
import Dialog from "react-native-dialog";

const API_URL = "http://192.168.1.13:3001";

class RealizarReserva extends Component{

  constructor(props) {
    super(props);
    this.state = {
      fecha_prestamo: "",
      fecha_reserva: "",
      fecha_pago: "",
      cicla: "",
      usuario: "",

      estaciones: [],
      estacion: {nombre: "none"},
      medios: [],
      medio_pago: {},
      open: false,
      enabled: false
    };
    this.getEstaciones = this.getEstaciones.bind(this);
    this.getMedios = this.getMedios.bind(this);
    this.getParams = this.getParams.bind(this);
    this.crearReserva = this.crearReserva.bind(this);
    this.setDate = this.setDate.bind(this);
    this.clearAll = this.clearAll.bind(this);
   
  }
 
  componentDidMount() {
    this.getEstaciones();
    this.getMedios();
    this.getParams();

  }

  getParams(){
    const { navigation } = this.props;
    const station = navigation.getParam('station',{nombre: "none"});
    if(station.nombre == "none"){
      this.setState({enabled: true})
    }else{
      this.setState({estacion: station})      
    }   
  }

  getMedios() {
    axios.get(`${API_URL}/medios`)
      .then(res => {
        const { data } = res;
        this.setState({
          medios: data
        });
      })
  }

  getEstaciones = () => {
    axios.get(`${API_URL}/estaciones`)
    .then(res => {
      const { data } = res;
      this.setState({
        estaciones: data
      });
    });
  };

  setDate(){
    var date = new Date();
    this.setState({ fecha_reserva: date.toLocaleString() });
    var pay_date = new Date(date.getTime() + 15 * 60000);
    this.setState({ fecha_pago: pay_date.toLocaleString() }); 
  }
 
  crearReserva(e) {
    if (this.state.estacion.nombre != "none" && this.state.medio_pago.valor != 0) {
      this.setState({ open: true });
      e.preventDefault();
      axios.post(`${API_URL}/reservas`, {
        fecha_reserva: this.state.fecha_reserva,
        fecha_pago: "",
        fecha_prestamo: "",
        medio_pago: this.state.medio_pago["nombre"],
        monto: this.state.medio_pago["valor"],
        estacion: this.state.estacion.nombre,
        cicla: 1,
        usuario: 2
      });
    } else {
      Alert.alert("ERROR");
    }
  }

  clearAll() {
    this.setState({
      fecha_reserva: "",
      fecha_pago: "",
      fecha_prestamo: "",
      medio_pago: {},
      estacion: {nombre: "none"},
      cicla: "",
      usuario: "",
      open: false,
    });
  }


  render() {

    return (
      // view principal
      <View>
        <View style={styles.BarContainer}>
          <Text style={styles.text_Title}>Eco Wheels</Text>
        </View>

        <Dialog.Container visible={this.state.open}>
          <Dialog.Title>Reserva Exitosa!</Dialog.Title>
          <Dialog.Description>
            Tienes 15 min ({this.state.fecha_pago.substring(10, 20)}) para
            llegar a la estacion {this.state.estacion.nombre} y realizar el pago.
          </Dialog.Description>
          <Dialog.Button label="OK" onPress={this.clearAll} />
        </Dialog.Container>

        <View style={styles.MainContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>Reserva</Text>
            
            <Text style={styles.labelInput}>Estacion*</Text>
            <Picker
              style={styles.input}
              selectedValue = {this.state.estacion}
              enabled = {this.state.enabled}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ estacion: itemValue })
              }
            > 
              <Picker.Item key="0" label={this.state.estacion.nombre} value={this.state.estacion} />
              {this.state.estaciones.map( estacion => (               
                <Picker.Item disabled key={estacion.id} label={estacion.nombre} value={estacion} />    
              ))}
            </Picker>

            <Text style={styles.labelInput}>Medio de pago*</Text>
            <Picker
              style={styles.input}
              selectedValue={this.state.medio_pago}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ medio_pago: itemValue })
              }
            >
              <Picker.Item key="0" label="none" value={{valor: 0 }} />
              {this.state.medios.map(medio => (
                <Picker.Item key={medio.id} label={medio.nombre} value={medio}/>
              ))}
            </Picker>

            <Text style={styles.labelInput}>Monto*</Text>
            <TextInput
              editable={false}
              style={styles.input}
              value={"   $" + this.state.medio_pago["valor"]}             
            />

            <TouchableHighlight
              style={styles.button}
              onPressOut={this.crearReserva}
              onPress={this.setDate}
            >
              <Text style={styles.text_Button}>Reservar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default RealizarReserva;

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
