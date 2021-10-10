import React from "react";
import { Image, Text, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Layout from '../components/Layout';
import {openDatabase} from '../Database.js';

const HomeScreen = ({navigation})=>{
    
    const handleToAuth=()=>{
        console.log('autenticacion');
        navigation.navigate('LoginScreen');
    }
    const handleToJoin=()=>{
        console.log('ingresando');
        navigation.navigate('MenuScreen') 
    }
    
    return(
        <Layout>
           <Image
                style={styles.logo}
                source={require('../assets/logo.png')} 
           />
           <TextInput
                style={styles.input} 
                placeholder="pin"
                placeholderTextColor="#808080"
           />
           <TouchableOpacity style={styles.btnPrimary} onPress={handleToJoin}>
                <Text style={styles.textSecondary}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSecondary} onPress={handleToAuth}>
                <Text style={styles.textPrimary}>Autenticar</Text>
            </TouchableOpacity>
            <Text style={styles.textSecondary}> Aplicacion movil</Text>
            <Text style={styles.textSecondary}> Direccion de agua</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({
    input:{
        width:'90%',
        backgroundColor:'#121F3D',
        marginBottom:20,
        fontSize: 20,
        borderWidth: 1,
        borderColor: "#094C9B",
        borderRadius:5,
        height:35,
        color:'#ffffff',
        textAlign:'center',
        padding:4,
    },
    btnPrimary:{
        paddingTop:20,
        paddingBottom:20,
        borderRadius:5,
        marginBottom:10,
        backgroundColor:'#0A8ECD',
        width:'90%'
    },
    btnSecondary:{
        paddingTop:20,
        paddingBottom:20,
        borderRadius:5,
        marginBottom:10,
        backgroundColor:'#C1DF8B',
        width:'90%'
    },
    textSecondary:{
        color:"#ffffff",
        textAlign:'center'
    },
    textPrimary:{
        color:"#03091E",
        textAlign:'center'
    },
    logo:{
        width:200,
        height:200,
        marginBottom:50

    }
})


export default HomeScreen;