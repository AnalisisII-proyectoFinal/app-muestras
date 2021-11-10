import React,{useState,useEffect} from "react";
import { Text, Keyboard,TouchableOpacity, StyleSheet,Modal,TextInput, Alert,KeyboardAvoidingView,TouchableWithoutFeedback,Platform,View } from "react-native";
import PickerTank from "../components/PickerTank";
import PickerTS from "../components/PickerTS";
import {getIncompleteSamples,getTanks,NewSampleIncomplete,threadActive}from "../ApiService.js";
import {openDatabase}from '../Database.js';

const NewSampleScreen = ()=>{
    const db = openDatabase();
    const [isModalVisibleT, setisModalVisibleT] = useState(false);
    const [isModalVisibleTS, setisModalVisibleTS] = useState(false);
    const [inSamples,setInSamples]= useState([]);
    const [tanks,setTanks]=useState([]);
    const [tank, settank] = useState({
        id:0,
        nom:'tanque...',
    });
    const [sample, setsample]=useState({
        id:0,
        sam:'muestra...',
    });
    const [thread,setThread]=useState({
        id:0,
        fi:'',
        ff:'',
        pr:0,
    })
    

    const [newSample,setNewSample]=useState({
        idm:0,
	    punto:'', 
	    ph:'',
	    cl:'',
        idu:0,
    })

    const handleChange=(name,value)=>setNewSample({...newSample,[name]:value})

    const getIdUser= ()=>{
        db.transaction((tx) => {
            tx.executeSql("select iduser from user", [], (_, { rows }) =>{
                console.log(rows._array[0].iduser)
                let id = rows._array[0].iduser;
                handleChange("idu",id)
                }
              );
          });
    }
    const changeModalVisibilityT=(boolt)=>{
        setisModalVisibleT(boolt);
    }
    const changeModalVisibilityTS=(boolts)=>{
        setisModalVisibleTS(boolts);
    }

    const setTankData=(optiont)=>{
        settank({id:optiont.id,nom:optiont.nombre})
        requestIncompletSamples(optiont.id)
       console.log(optiont.id)
    }

    const setTypeData = (optionts)=>{
        setsample({id:optionts.id,sam:optionts.idm})
        handleChange("idm",optionts.id)
       console.log(sample)
    }

    const requestTanks=async()=>{
        try {
            const rTanks = await getTanks();
            setTanks(rTanks.body)
        } catch (error) {
            console.log(error)
        }
    }

    const requestIncompletSamples= async (idt)=>{
        try {
           const InSamples = await getIncompleteSamples(idt);
           setInSamples(InSamples.body)
        } catch (error) {
            console.log(error)
        } 
    }
    const requestThread= async ()=>{
        try {
            const t= await threadActive();
            console.log(t);
            setThread({id:t.body[0].id,fi:t.body[0].fecha1,ff:t.body[0].fecha2,pr:t.body[0].porcentaje})
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        requestThread();
        requestTanks();
        getIdUser();
    },[])
    
    const handleSubmit=async ()=>{
        try {
            console.log(newSample)
            if (newSample.idu !== 0) {
                const res = await NewSampleIncomplete(newSample)
                Alert.alert('Exito !',res.body.msg)
            }else{
                Alert.alert("Error !","Verifique autenticación")

            }
        } catch (error) {
            Alert.alert('Error !','Muestra no enviada')
        } 
    }

   
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <Text style={styles.textTank}>{`Hilo: De:${thread.fi} Al: ${thread.ff}`}</Text>
                <TouchableOpacity
                    onPress={()=>changeModalVisibilityT(true)}
                    style={styles.optionTank}
                >
                <Text style={styles.textTank}>{tank.nom}</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisibleT}
                onRequestClose={()=>changeModalVisibilityT(false)}
            >
                <PickerTank
                changeModalVisibilityT={changeModalVisibilityT}
                setTankData={setTankData}
                tanks={tanks}
                />
            </Modal>
             <TouchableOpacity
                onPress={()=>changeModalVisibilityTS(true)}
                style={styles.optionType}
            >
                <Text style={styles.textType}>{sample.sam}</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisibleTS}
                onRequestClose={()=>changeModalVisibilityTS(false)}
            >
                <PickerTS
                changeModalVisibilityTS={changeModalVisibilityTS}
                setTypeData={setTypeData}
                inSamples={inSamples}
                />
            </Modal>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                {/* <Text style={styles.textTank}>{`Punto de Muestra`}</Text> */}
                <TextInput
                    style={styles.input} 
                    placeholder="punto muestra"
                    placeholderTextColor="#808080"
                    onChangeText={(text)=> handleChange("punto",text)}
                />
               {/*  <Text style={styles.textTank}>{`PH`}</Text> */}
                <TextInput
                    style={styles.input} 
                    placeholder="ph"
                    placeholderTextColor="#808080"
                    keyboardType="decimal-pad"
                    onChangeText={(text)=> handleChange("ph",text.toString() +' ml')}
                />
                {/* <Text style={styles.textTank}>{`Cloro residual`}</Text> */}
                <TextInput
                    style={styles.input} 
                    placeholder="cloro residual"
                    placeholderTextColor="#808080"
                    keyboardType="decimal-pad"
                    onChangeText={(text)=> handleChange("cl",text.toString() +' ml')}
                />
            
                <TouchableOpacity 
                    style={styles.buttonSigin}
                    onPress={()=>handleSubmit()}
                >
                    <Text style={styles.buttonText}>Guardar</Text>
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

export default NewSampleScreen;