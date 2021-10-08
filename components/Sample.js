import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const Sample = ({muestras})=>{
    return(
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}> {muestras.tanq}</Text>
            <Text style={styles.itemTitle}> {muestras.ph}</Text>
            <Text style={styles.itemTitle}> {muestras.cl}</Text>
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

export default Sample;