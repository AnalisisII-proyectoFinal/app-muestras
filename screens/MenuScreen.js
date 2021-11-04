import React from "react";
import { Text,StyleSheet,TouchableOpacity, Image } from "react-native";
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
    


    return(
        <Layout>
            <Image 
                style={styles.logo}
                source={require('../assets/favicon.png')}
            />
           <TouchableOpacity style={styles.btnPrimary} onPress={handlerToNewSample}>
                <Text style={styles.textSecondary}>Nueva Muestra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSecondary} onPress={handlerToSampleScreen}>
                <Text style={styles.textPrimary}>Muestras</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPrimary} onPress={handlerToTankScreen}>
                <Text style={styles.textSecondary}>Tanques</Text>
            </TouchableOpacity>
        </Layout>
    )
}

const styles = StyleSheet.create({
   
    btnPrimary:{
        paddingTop:20,
        paddingBottom:20,
        borderRadius:5,
        marginBottom:40,
        backgroundColor:'#0A8ECD',
        width:'90%'
    },
    btnSecondary:{
        paddingTop:20,
        paddingBottom:20,
        borderRadius:5,
        marginBottom:40,
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
    logo:{
        width:80,
        height:80,
        marginBottom:50

    }
})

export default MenuScreen;