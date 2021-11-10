import React,{useEffect,useState} from "react";
import { Image, Text, StyleSheet, View, TextInput,TouchableOpacity, Alert,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from "react-native";
 import {openDatabase} from '../Database.js';
const db = openDatabase(); 
const HomeScreen = ({navigation})=>{
     const [pin,setPin]=useState();
    const handleToAuth=()=>{
       navigation.navigate('LoginScreen');
    }
    const handleToJoin=()=>{
       /* if (pin==='') {
            Alert.alert('Campo Vacio','Ingrese Pin')
        }else if (pin==='1234') {
            navigation.navigate('MenuScreen') 
        }else{
            Alert.alert('Pin incorrecto')
        } 
        navigation.navigate('MenuScreen') */
        if (pin==='') {
            Alert.alert('Campo Vacio','Ingrese Pin')
            
        }else{
        db.transaction((tx) => {
            tx.executeSql("select * from user where pin=?", [pin], (_, { rows }) =>{
                if (rows.length === 0) {
                    Alert.alert('Pin incorrecto')
                }else{
                    navigation.navigate('MenuScreen') 
                }
                }
              );
          });
        } 
    }
    
    const createTableUser=()=>{
        db.transaction((tx) => {
            tx.executeSql(
              "create table if not exists user (id integer primary key not null, pin int, user text,iduser,int);"
            );
          });
    }
    

     const handlePin=(pin)=>{
        setPin(pin)
    }

    useEffect(() => {
        createTableUser();
    },[]) 
    

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                <Image
                style={styles.logo}
                source={require('../assets/logo.png')} 
                    />
                    <TextInput placeholder="PIN" 
                        style={styles.textInput}
                        placeholderTextColor="#808080"
                        keyboardType="numeric"
                        onChangeText={(text)=>handlePin(text)}  />
                    <View>
                        <TouchableOpacity style={styles.btnPrimary} onPress={handleToJoin}>
                            <Text style={styles.textSecondary}>Ingresar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSecondary} onPress={handleToAuth}>
                            <Text style={styles.textSecondary}>Autenticar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#18284A",
        paddingLeft:25,
        flex:1
      },
      textInput: {
        width:'90%',
        backgroundColor:'#121F3D',
        marginBottom:30,
        fontSize: 25,
        borderWidth: 1,
        borderColor: "#094C9B",
        borderRadius:5,
        height:40,
        color:'#ffffff',
        textAlign:'center',
        padding:4,
      },
    btnSecondary:{
        paddingTop:20,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:5,
        backgroundColor:'#0A8ECD',
        width:'90%'
    },
    btnPrimary:{
        paddingTop:20,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:30,
        backgroundColor:'#C1DF8B',
        width:'90%'
    },
    textPrimary:{
        color:"#03091E",
        textAlign:'center',
        fontSize:25
    },
    textSecondary:{
        color:"#ffffff",
        textAlign:'center',
        fontSize:25
    },
    textPrimary:{
        color:"#03091E",
        textAlign:'center'
    },
    logo:{
        width:200,
        height:200,
        marginLeft:"20%",
        marginBottom:50

    }
})

export default HomeScreen;

