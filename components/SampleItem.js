import React from "react";
import { Text, View, StyleSheet,Image } from 'react-native';

const SampleItem = ({sample})=>{
    return(
        <View style={styles.itemContainer}>
            <Image
                style={styles.logo}
                source={require('../assets/muestra.png')} 
                />
            <View>
                <Text style={styles.itemTitle}> Nombre del tanque: {sample.tanq}</Text>
                <Text style={styles.itemTitle}> Ph de muestra: {sample.ph}</Text>
                <Text style={styles.itemTitle}> Cloro Residual: {sample.cl}</Text>
                <Text style={styles.itemTitle}> Tipo Muestra: {sample.tm}</Text>
            </View>
        </View>
        
    )

}

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor: "#0A8ECD",
        padding: 10,
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 5,
       /*  backgroundColor:"#31B1FF",
        padding:20,
        marginVertical:8,
        borderBottomEndRadius:5, */
    },
    itemTitle:{
        color:"#ffffff"
    },
    logo:{
        width:50,
        height:50,
    }
})

export default SampleItem;