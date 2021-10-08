import React,{useState} from "react";
import { Text, TouchableOpacity, StyleSheet,Modal,TextInput } from "react-native";
import Layout from '../components/Layout';
import PickerTank from "../components/PickerTank";
import PickerTS from "../components/PickerTS";

const NewSampleScreen = ()=>{
    const [tank, settank] = useState('tanque...');
    const [isModalVisibleT, setisModalVisibleT] = useState(false);
    const [typeS, setTypeS] = useState('tipo muestra..');
    const [isModalVisibleTS, setisModalVisibleTS] = useState(false);
    
    const changeModalVisibilityT=(boolt)=>{
        setisModalVisibleT(boolt);
    }
    const changeModalVisibilityTS=(boolts)=>{
        setisModalVisibleTS(boolts);
    }

    const setTankData=(optiont)=>{
        settank(optiont)
    }
    const setTypeData = (optionts)=>{
        setTypeS(optionts)
    }

    return(
        <Layout>
           <TouchableOpacity
                onPress={()=>changeModalVisibilityT(true)}
                style={styles.optionTank}
            >
                <Text style={styles.textTank}>{tank}</Text>
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
                />
            </Modal>
            <TouchableOpacity
                onPress={()=>changeModalVisibilityTS(true)}
                style={styles.optionType}
            >
                <Text style={styles.textType}>{typeS}</Text>
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
                />
            </Modal>
            <TextInput
                style={styles.input} 
                placeholder="punto muestra"
                placeholderTextColor="#808080"
            />
            <TextInput
                style={styles.input} 
                placeholder="ph"
                placeholderTextColor="#808080"
            />
            <TextInput
                style={styles.input} 
                placeholder="cloro residual"
                placeholderTextColor="#808080"
            />
            
            <TouchableOpacity style={styles.buttonSigin}>
                <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
        </Layout>
    )
}


const styles = StyleSheet.create({
    textTank:{
        textAlign:'center',
        marginVertical:10,
        fontSize:16,
        color:"#ffffff",
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
        fontSize: 30,
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
    }
})

export default NewSampleScreen;