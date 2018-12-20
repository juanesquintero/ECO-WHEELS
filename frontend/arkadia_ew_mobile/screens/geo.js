import React,{Component} from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  TouchableHighlight
} from "react-native";
import MapView, { Overlay } from "react-native-maps"


const API_URL = "http://192.168.0.25:3001";

const {width,height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.14
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Estaciones extends Component{

    constructor(props) {
        super(props);
        this.watchID = null
        this.state = {
            estaciones:[],
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },            
            personalMarker:{
                latitude: 0,
                longitude: 0,
            }
        };
        this.getEstaciones = this.getEstaciones.bind(this);
        this.abrirDialogo = this.abrirDialogo.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)
            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }
            this.setState({initialPosition:  initialRegion})
            this.setState({personalMarker:  initialRegion})
        }, (error) => alert(JSON.stringify(error)),{enableHighAccuracy: true, timeout: 2000, maximumAge: 1000})
        
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)
            var lastRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }
            this.setState({initialPosition:  lastRegion})
            this.setState({personalMarker:  lastRegion})
        })
        
        this.getEstaciones();
    }

    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID)
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
        <Text
            style={styles.puntoEstacion}           
        >
        {station.nombre}
        </Text>
        )
      
        return (                           
            <View style={styles.containerMap}>
                <MapView
                style = {styles.map}
                initialRegion={this.state.initialPosition}
                >

                <MapView.Marker
                coordinate = {this.state.personalMarker}>
                <View style = {styles.radius}>
                    <View style={styles.marker}/>
                </View>
                </MapView.Marker>

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
        position : "absolute",
        top: 0,
        left:0,
        right:0,
        bottom:0,
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
