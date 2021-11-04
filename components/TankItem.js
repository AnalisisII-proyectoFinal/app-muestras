import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
const TankItem = ({tank})=>{
    return (
        <View style={styles.itemContainer}>
                <Image
                style={styles.logo}
                source={require('../assets/tanque.png')} 
                />
                <View>
                    <Text style={styles.itemTitle}>Nombre: {tank.nombre}</Text>
                    <Text style={styles.itemTitle}>Numero: {tank.numero}</Text>
                    <Text style={styles.itemTitle}>Ubicacion: {tank.ubicacion}</Text>
                </View>  
        </View>
    )
}
const styles = StyleSheet.create({
    itemContainer: {
      backgroundColor: "#0A8ECD",
      padding: 10,
      marginVertical: 8,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderRadius: 5,
    },
    itemTitle: {
      color: "#ffffff",
    },
    logo:{
        width:50,
        height:50,
    }
  });
  export default TankItem;