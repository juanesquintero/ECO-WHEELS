import React,{Component} from "react";
import axios from "axios";
import MapView, { Overlay } from "react-native-maps"
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  TouchableHighlight
} from "react-native";


const API_URL = "http://192.168.1.18:3001";
const {width,height} = Dimensions.get('window')


class Estaciones extends Component{

    constructor(props) {
        super(props);
        this.state = {
            estaciones:[],
            initialPosition: {
                latitude: 6.215,
                longitude: -75.588,
                latitudeDelta: 0.15,
                longitudeDelta: 0.04,
            },

            personalPosition:{
                latitude: 0,
                longitude: 0,
            }
        };
        this.getEstaciones = this.getEstaciones.bind(this);
        this.abrirDialogo = this.abrirDialogo.bind(this);
        this.delta = this.delta.bind(this);
    }

    delta(lat, long, accuracy){
        const grados = 111.32
        const circu = (40075/360)
        const latDelta = accuracy * (1/(Math.cos(lat) * circu))
        const longDelta = accuracy / grados

        this.setState({
            initialPosition:{
                latitude: lat,
                longitude: long,
                latitudeDelta: latDelta,
                longitudeDelta: longDelta
            },
            personalPosition: {
                latitude: lat,
                longitude: long,
            }
        })
    }

    componentDidMount() {        
        this.getEstaciones();
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var lat =  position.coords.latitude
                var long = position.coords.longitude
                var accuracy = position.coords.accuracy
                this.delta(lat, long, accuracy)
            }
        )
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

    abrirDialogo = station => {  
        Alert.alert(station.nombre,
            "Ciclas: "+station.ciclas+
             "    -    Parkings: "+ station.parking+
            "\n"+station.direccion+
            "\n"+station.descripcion, 
            [
                {text: 'OK',style: 'cancel'},
                {text: 'Reservar', onPress: () =>  this.props.navigation.navigate("Reserva",{ station: station})},
            ]
            )    
    };
    
  
    render() {
        const PuntoEstacion = ({station}) => (
            <Text style={styles.puntoEstacion}>
                {station.nombre}
            </Text>
        )
      
        return (                           
            <View style={styles.containerMap}>
               
                <MapView
                style = {styles.map}
                initialRegion ={this.state.initialPosition}
                >

                {this.state.personalPosition.latitude != 0 ?  <MapView.Marker
                coordinate = {this.state.personalPosition}>
                    <View style = {styles.radius}>
                        <View style={styles.marker}/>
                    </View>
                </MapView.Marker> : null }


                {this.state.estaciones.map(estacion => (
                     <MapView.Marker
                     key = {estacion.id}
                     coordinate = {{
                         latitude: estacion.lat,
                         longitude: estacion.lng,
                     }}
                     onPress ={()=> this.abrirDialogo(estacion)}                     
                    >
                        <PuntoEstacion station={estacion} key={estacion.id}/>
                    </MapView.Marker>                
                ))}

                </MapView>

            </View>
                    
        )
    }
}

export default Estaciones;

const styles = StyleSheet.create({
    puntoEstacion: {
        backgroundColor:"grey",
        padding: 5,
        textAlign: "center",
        alignItems: "center",        
        borderRadius: 40,
        flexWrap: "wrap",
        alignItems: 'flex-start',
        fontSize: 10,
        fontWeight: "bold",
        color: "#ffffff",      
      },
    radius:{
        height: 50,
        width: 50,
        borderRadius :50/2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        borderWidth: 1 ,
        borderColor: 'rgba(0, 122, 255, 0.3)', 
        justifyContent: "center",
        alignItems: "center",
    },
    marker:{
        height: 20,
         width: 20,
         borderWidth: 3,
         borderColor: 'white',
         borderRadius: 20/2,
         backgroundColor: '#007AFF'
         
    },
    map:{
        flex: 1,
        width: width,
    },
    containerMap:{
        position: "absolute",
        top: 0,
        left:0,
        right:0,
        bottom:0,
        justifyContent:"flex-end",
        alignItems: "center" 
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
    }
});
