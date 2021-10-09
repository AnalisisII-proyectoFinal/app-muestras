import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const SampleItem = ({sample})=>{
    return(
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}> Nombre del tanque: {sample.tanq}</Text>
            <Text style={styles.itemTitle}> Ph de muestra: {sample.ph}</Text>
            <Text style={styles.itemTitle}> Cloro Residual: {sample.cl}</Text>
            <Text style={styles.itemTitle}> Tipo Muestra: {sample.tm}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:"#31B1FF",
        padding:20,
        marginVertical:8,
        borderBottomEndRadius:5,
    },
    itemTitle:{
        color:"#ffffff"
    }
})

export default SampleItem;