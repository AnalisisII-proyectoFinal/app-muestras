import React,{useState,useEffect} from "react";
import { Text,TouchableOpacity,StyleSheet } from "react-native";
import Layout from '../components/Layout';
import{getTypeSamples}from '../ApiService.js';
const TypeSampleScreen = ()=>{

    const [typeSample,setTypeSample]=useState([]);
    
    const viewtypeSample=()=>{
        console.log(typeSample)
    }
   
    const getTypeSam = async ()=>{
        try {
            const typeSamples = await getTypeSamples();
            setTypeSample(typeSamples.body);
        } catch (error) {
            console.log(error)
        }  
    }

    useEffect(()=>{
        getTypeSam();
    },[]);
    return(
        <Layout>
           <Text>Screen Typesample</Text>
           <TouchableOpacity style={styles.btnSecondary} onPress={viewtypeSample}>
                <Text style={styles.textPrimary}>Autenticar</Text>
            </TouchableOpacity>
        </Layout>
    )
}

const styles= StyleSheet.create({
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
    btnSecondary:{
        paddingTop:20,
        paddingBottom:20,
        borderRadius:5,
        marginBottom:10,
        backgroundColor:'#C1DF8B',
        width:'90%'
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



export default TypeSampleScreen;