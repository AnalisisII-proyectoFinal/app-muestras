import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView
}from 'react-native';

const OPTIONS =['tanque','casa1','casa2']
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const PickerTS = (props)=>{
    const onPressItem=(optionts)=>{
        props.changeModalVisibilityTS(false);
        props.setTypeData(optionts);
    }

    const optionts = OPTIONS.map((item,index)=>{
        return(
            <TouchableOpacity
            style={styles.option}
            key={index}
            onPress={()=>onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>

            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
        onPress={()=> props.changeModalVisibilityTS(false)}
        style={styles.container}
        >
            <View style={[styles.modal,{width:WIDTH-10,height:(HEIGHT/2)+100}]}>
                <ScrollView>
                    {optionts}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    modal:{
        backgroundColor:'#445D6E',
        borderRadius:10
    },
    option:{
        alignItems:'flex-start'
    },
    text:{
        color:"#ffffff",
        margin:20,
        fontSize:20,
        fontWeight:'bold'
    }

})

export default PickerTS;