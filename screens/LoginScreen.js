import React,{useState} from "react";
import { Text,TouchableOpacity,TextInput,Platform, StyleSheet, Alert, KeyboardAvoidingView,TouchableWithoutFeedback,View,Keyboard } from "react-native";
import {authUser}from '../ApiService.js';
import {openDatabase}from '../Database.js';
const LoginScreen = ()=>{
    const db = openDatabase();
    const [credential,setCredential]= useState({
        user:'',
        pass:''
    })
    
    const insertUser=(p,u,i)=>{
        db.transaction((tx)=>{
            tx.executeSql("select * from user", [], (_, { rows }) =>{
                if(rows.length > 0){
                    db.transaction(
                        (tx) => {
                          tx.executeSql("update user set pin=?, user=?,iduser=?", [p,u,i]);
                        },
                        null,
                      );

                }else{
                    db.transaction(
                        (tx) => {
                          tx.executeSql("insert into user (pin, user,iduser) values (?,?,?)", [p,u,i]);
                        },
                        null,
                      );

                }
            })
        })
        
    }
    const handleAuth= async ()=>{
       try {
           const result= await authUser(credential.user,credential.pass)
           if (result.body.length===0) {
                Alert.alert('usuario no esta habilitado')
           }else{
                const d=result.body;
                const pin=d[0].pin;
                const use=d[0].usuario;
                const idu=d[0].id;
                console.log(pin,use,idu)
                insertUser(pin,use,idu) 
                Alert.alert('Autenticación exitosa');           
            }
            } catch (error) {
               console.log(error)
               Alert.alert("error","Al atenticarse");
            }
        
    }
    


    const handleChange= (name,value)=> setCredential({...credential,[name]:value});
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Usuario:</Text>
                    <TextInput placeholder="Usuario" 
                        style={styles.textInput}
                        placeholderTextColor="#808080"
                        onChangeText={(text)=>handleChange("user",text)} />
                    <Text style={styles.header}>Contraseña:</Text>
                    <TextInput placeholder="Contraseña" 
                        style={styles.textInput}
                        placeholderTextColor="#808080"
                        onChangeText={(text)=>handleChange("pass",text)} />
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btnPrimary} onPress={handleAuth}>
                            <Text style={styles.textPrimary}>Autenticar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}

const styles= StyleSheet.create({
    container: {
        backgroundColor: "#18284A",
        padding:20,
        flex:1,
      },
      inner: {
        padding: 20,
        flex: 1,
        justifyContent: "space-around"
      },
      header: {
        fontSize: 20,
        marginBottom: 1,
        color:"white",
        textAlign:'center'
      },
      textInput: {
        width:'90%',
        backgroundColor:'#121F3D',
        fontSize: 25,
        borderWidth: 1,
        borderColor: "#094C9B",
        borderRadius:5,
        height:40,
        color:'#ffffff',
        textAlign:'center',
        padding:4,
      },
      btnContainer: {
        marginTop: 1
      },
    
    textPrimary:{
        color:"#03091E",
        textAlign:'center'
    },
    btnPrimary:{
        paddingTop:20,
        paddingBottom:20,
        borderRadius:5,
        backgroundColor:'#C1DF8B',
        width:'90%'
    }
})




export default LoginScreen;
