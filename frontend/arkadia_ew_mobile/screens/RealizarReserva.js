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

const API_URL = "http://192.168.1.18:3001";

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
      estacion: {},
      medios: [],
      medio_pago: {},
      enabled: false
    };
    this.getEstaciones = this.getEstaciones.bind(this);
    this.getMedios = this.getMedios.bind(this);
    this.getCiclas = this.getCiclas.bind(this);
    this.crearReserva = this.crearReserva.bind(this);
    this.setDate = this.setDate.bind(this);
    this.clearAll = this.clearAll.bind(this);  
    this.abrirDialogo = this.abrirDialogo.bind(this);
    this.getParams = this.getParams.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  componentDidMount() {
    this.getEstaciones();
    this.getMedios();  
    this.getParams(); 
  }


  getParams(){
    const { navigation } = this.props;
    const station = navigation.getParam('station','');
    console.log(station)

    if(station != ''){
      this.setState({estacion: station})
      return true
    }else{
      return false
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
  }

  getCiclas = () => {
    if(this.state.estacion.ciclas != 0){

      axios.put(`${API_URL}/estaciones/`+this.state.estacion.nombre,{
        ciclas: this.state.estacion.ciclas - 1
      }).then( res => {
        const {data} = res;
        console.log(res)
      })

      return true

    }else{
      return false
    }
  }

  abrirDialogo(station){
    Alert.alert("Reserva Exitosa!",
      "Tienes 15 min ("+this.state.fecha_pago.substring(10, 20)+") para "+
      "llegar a la estacion "+station.nombre+" y realizar el pago" ,
      [{text: 'OK', onPress: () =>  this.clearAll()}]
      )    
  }

  crearReserva(e) {
    if (!this.isEmpty(this.state.estacion) && !this.isEmpty(this.state.medio_pago)) {
      if(this.getCiclas()){
        e.preventDefault();
        axios.post(`${API_URL}/reservas`, {
          fecha_reserva: this.state.fecha_reserva,
          fecha_pago: "",
          fecha_prestamo: "",
          medio_pago: this.state.medio_pago.nombre,
          monto: this.state.medio_pago.valor,
          estacion: this.state.estacion.nombre,
          cicla: 1,
          usuario: 2
        });
        this.abrirDialogo(this.state.estacion)
      }else{
        Alert.alert("Ups!", "No hay ciclas disponibles en"+this.state.estacion.nombre);
      }
    } else {
      Alert.alert("ERROR", "Informacion incompleta");
    }
  }

  setDate(){
    var date = new Date();
    this.setState({ fecha_reserva: date.toLocaleString() });
    var pay_date = new Date(date.getTime() + 15 * 60000);
    this.setState({ fecha_pago: pay_date.toLocaleString() }); 
  }

  clearAll() {
    this.setState({
      fecha_reserva: "",
      fecha_pago: "",
      fecha_prestamo: "",
      medio_pago: {},
      estacion: {},
      cicla: "",
      usuario: "",
    });
  }

  isEmpty(obj){
    return (Object.getOwnPropertyNames(obj).length === 0);
  }

  render() {

    return (
      // view principal
      <View>
        <View style={styles.BarContainer}>
          <Text style={styles.text_Title}>Eco Wheels</Text>
        </View>
        <View style={styles.MainContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>Reserva</Text>
            
            <Text style={styles.labelInput}>Estacion*</Text>
            { this.getParams() ?
              <TextInput
                editable={false}
                style={styles.input}
                value={this.state.estacion.nombre}             
              /> :
              <Picker
              style={styles.input}
              selectedValue = {this.state.estacion}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ estacion: itemValue })
              }> 
              <Picker.Item key="0" label="--seleccione--" value={{}}/>            
              {this.state.estaciones.map( item =>        
                <Picker.Item  key={item.id} label={item.nombre} value={item} />    
              )}
              </Picker>}

            <Text style={styles.labelInput}>Medio de pago*</Text>
            <Picker
              style={styles.input}
              selectedValue={this.state.medio_pago}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ medio_pago: itemValue })
              }
            >
              <Picker.Item key="0" label="--seleccione--" value={{}} />
              {this.state.medios.map(medio => (
              <Picker.Item key={medio.id} label={medio.nombre} value={medio}/>
              ))}
            </Picker>

            <Text style={styles.labelInput}>Monto*</Text>
            <TextInput
              editable={false}
              style={styles.input}
              value={this.isEmpty(this.state.medio_pago) ? "   $  - " : "   $ " + this.state.medio_pago.valor}             
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
