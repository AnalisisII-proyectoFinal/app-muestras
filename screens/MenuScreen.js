import React from "react";
import { Text,StyleSheet,TouchableOpacity } from "react-native";
import Layout from '../components/Layout';
const MenuScreen = ({navigation})=>{

    const handlerToNewSample=()=>{
        navigation.navigate('NewSampleScreen');
    }
    const handlerToSampleScreen=()=>{
        navigation.navigate('SampleScreen');
    }
    const handlerToTankScreen=()=>{
        navigation.navigate('TankScreen');
    }
    const handlerToThreadScreen=()=>{
        navigation.navigate('ThreadScreen');
    }
    const handlerToTypeSamplescreen=()=>{
        navigation.navigate('TypeSampleScreen');
    }


    return(
        <Layout>
           <TouchableOpacity style={styles.btnPrimary} onPress={handlerToNewSample}>
                <Text style={styles.textSecondary}>Nueva Muestra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSecondary} onPress={handlerToSampleScreen}>
                <Text style={styles.textPrimary}>Muestras</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPrimary} onPress={handlerToTankScreen}>
                <Text style={styles.textSecondary}>Tanques</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSecondary} onPress={handlerToThreadScreen}>
                <Text style={styles.textPrimary}>Hilos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPrimary} onPress={handlerToTypeSamplescreen}>
                <Text style={styles.textSecondary}>Tipos de muestras</Text>
            </TouchableOpacity>
        </Layout>
    )
}

const styles = StyleSheet.create({
   
    btnPrimary:{
        paddingTop:20,
        paddingBottom:20,
        borderRadius:5,
        marginBottom:50,
        backgroundColor:'#0A8ECD',
        width:'90%'
    },
    btnSecondary:{
        paddingTop:20,
        paddingBottom:20,
        borderRadius:5,
        marginBottom:50,
        backgroundColor:'#C1DF8B',
        width:'90%'
    },
    textSecondary:{
        color:"#ffffff",
        textAlign:'center',
        fontSize:18,

    },
    textPrimary:{
        color:"#03091E",
        textAlign:'center',
        fontSize:18,
    },
})

export default MenuScreen;