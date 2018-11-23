import React,{Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableHighlight
} from "react-native";
import MapView, {Marker} from "react-native-maps"
import Dialog from "react-native-dialog";

const API_URL = "http://localhost:3001";

class Estaciones extends Component{

    constructor(props) {
        super(props);
        this.state = {
            estaciones:[],
        };
        this.getEstaciones = this.getEstaciones.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    componentDidMount() {
        this.getEstaciones();
    }
    
    getEstaciones = () => {
    fetch(`${API_URL}/estaciones`)
        .then(res => res.json())
        .then(resJson => {
        this.setState({
            estaciones: resJson
        });
        })
        .catch(err => {
            console.error(err);
        });
    };

    

    handleOpen = station => {
        Alert.alert(station.nombre,
            "Ciclas:"+station.ciclas+
             "   -    Parkings:"+ station.parking+
            "\n"+station.direccion+
            "\n"+station.descripcion)    
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
                initialRegion={{
                    latitude: 6.2304001,
                    longitude: -75.59718,
                    latitudeDelta: 0.14,
                    longitudeDelta: 0.14
                }}
                >
                {this.state.estaciones.map(estacion => (
                     <MapView.Marker
                     key = {estacion.id}
                     coordinate = {{
                         latitude: estacion.lat,
                         longitude: estacion.lng,
                     }}
                     onPress ={()=>this.handleOpen(estacion)}                     
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
