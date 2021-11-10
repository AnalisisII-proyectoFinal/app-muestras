import React,{useEffect,useState} from "react";
import {KeyboardAvoidingView, View, Text, TouchableWithoutFeedback,TextInput,StyleSheet,Keyboard,Platform,TouchableOpacity, Alert} from "react-native";
import {getSample,updateSample} from "../ApiService.js";
const EditSampleScreen=({route})=>{
    const [sample,setSample]=useState({
        cl:'',
        id:0,
        ph:'',
        pmuestra:'',
        tanque:'',
        tmuestra:'',
    })
    const handleGetSample=async ()=>{
        if (route.params && route.params.id) {
           const s= await getSample(route.params.id);
          let rs=s.body[0];
           console.log(s.body[0])
          setSample({cl:rs.cl,id:rs.id,ph:rs.ph,pmuestra:rs.pmuestra,tanque:rs.tanque,tmuestra:rs.tmuestra})
        }else{
            console.log("nada")
        }
    }
    const handleUpdateSample=async()=>{
       const r = await updateSample(sample);
       Alert.alert("exito !",r.body.msg)
    }
    const handleChange=(name,value)=> setSample({...sample,[name]:value});

useEffect(()=>{
 handleGetSample();
},[])

return(
    <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>  
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#808080"
                    value={sample.tanque}
                    editable={false} 
                    selectTextOnFocus={false}
                /> 
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#808080"
                    value={sample.tmuestra}
                    editable={false} 
                    selectTextOnFocus={false}
                />
                <Text style={styles.textTank}>{`Punto de Muestra`}</Text> 
                <TextInput
                    style={styles.input} 
                    placeholder="punto muestra"
                    placeholderTextColor="#808080"
                    value={sample.pmuestra}
                    onChangeText={(text)=> handleChange("pmuestra",text)}
                />
                 <Text style={styles.textTank}>{`PH`}</Text> 
                <TextInput
                    style={styles.input} 
                    placeholder="ph"
                    placeholderTextColor="#808080"
                    value={sample.ph}
                    onChangeText={(text)=> handleChange("ph",text)}
                />
                 <Text style={styles.textTank}>{`Cloro residual`}</Text> 
                <TextInput
                    style={styles.input} 
                    placeholder="cloro residual"
                    placeholderTextColor="#808080"
                    value={sample.cl}
                    onChangeText={(text)=> handleChange("cl",text)}
                />
            
                <TouchableOpacity 
                    style={styles.buttonSigin}
                    onPress={handleUpdateSample}
                >
                    <Text style={styles.buttonText}>Actualizar</Text>
                </TouchableOpacity>   
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        )
}
const styles = StyleSheet.create({
    textTank:{
        textAlign:'center',
        marginVertical:10,
        fontSize:16,
        color:"#ffffff",
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    textType:{
        textAlign:'center',
        marginVertical:10,
        fontSize:16,
        color:"#03091E",
    },
    optionTank:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:20,
        backgroundColor:'#0A8ECD',
        width:'90%'
    },
    optionType:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:20,
        backgroundColor:'#C1DF8B',
        width:'90%'
    },
    input:{
        width:'90%',
        backgroundColor:'#121F3D',
        marginBottom:25,
        fontSize: 20,
        borderWidth: 1,
        borderColor: "#094C9B",
        borderRadius:5,
        height:35,
        color:'#ffffff',
        textAlign:'center',
        padding:4,
    },
    buttonSigin:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:10,
        backgroundColor:'#31B1FF',
        width:'90%'
    },
    buttonText:{
        color:"#ffffff",
        textAlign:'center'
    },
    container: {
        backgroundColor: "#18284A",
        padding:20,
        flex:1,
      }
})
export default EditSampleScreen;