import React from "react";
import { Text, View, StyleSheet,Image,TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/native";

const SampleItem = ({sample})=>{
    const navigation = useNavigation();
    return(
        <View style={styles.itemContainer}>
            <Image
                style={styles.logo}
                source={require('../assets/muestra.png')} 
                />
            <View>
                <TouchableOpacity
                onPress={()=>navigation.navigate("EditSampleScreen",{id:sample.id})}
                >
                <Text style={styles.itemTitle}> Nombre del tanque: {sample.tanq}</Text>
                <Text style={styles.itemTitle}> Ph de muestra: {sample.ph}</Text>
                <Text style={styles.itemTitle}> Cloro Residual: {sample.cl}</Text>
                <Text style={styles.itemTitle}> Tipo Muestra: {sample.tm}</Text>
                <Text style={styles.itemTitle}> Punto Muestra: {sample.pm}</Text>
                </TouchableOpacity>
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