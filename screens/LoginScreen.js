import React,{useState} from "react";
import { Text,Image,TouchableOpacity,TextInput, StyleSheet, Alert } from "react-native";
import Layout from '../components/Layout';
import ApiServices from '../Api.js';
const apiService = new ApiServices();

const LoginScreen = ()=>{
    const [credential,setCredential]= useState({
        user:'',
        pass:''
    })

    const requestApi=(us,pas)=>{
        apiService.hacerPeticion(`/autenticacion/${us}/${pas}`,{},'GET').then(data=>{
            if (data.body.length === 0) {
                console.log('usuario no habilidado')
                Alert.alert('usuario no esta habilitado')
            }else{
                console.log(data.body)
            }
            
        }).catch(err=>{
            console.log(err)
        })

    }

    const handleAuth= async ()=>{
        try {
            await requestApi(credential.user,credential.pass)
        } catch (error) {
            console.log(error)
        }
        
    }
    const handleChange= (name,value)=> setCredential({...credential,[name]:value});
   // const handleChange=(name,value)=> setCredential({[name]:value})
    return(
        <Layout>
           <Image
            style={styles.logo}
            source={require('../assets/logauth.png')}
           />
           <TextInput
                style={styles.input} 
                placeholder="usuario"
                placeholderTextColor="#808080"
                onChangeText={(text)=>handleChange("user",text)}
           />
           <TextInput
                style={styles.input} 
                placeholder="contraseña"
                placeholderTextColor="#808080"
                onChangeText={(text)=>handleChange("pass",text)}
           />
            <TouchableOpacity style={styles.btnSecondary} onPress={handleAuth}>
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




export default LoginScreen;