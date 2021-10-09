import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView
}from 'react-native';

const OPTIONS =['tanque1','tanque2','tanque3']
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const PickerTank = (props)=>{
    const onPressItem=(optiont)=>{
        props.changeModalVisibilityT(false);
        props.setTankData(optiont);
    }




    const optiont = props.tanks.map((item)=>{
        return(
            <TouchableOpacity
            style={styles.option}
            key={item.id}
            onPress={()=>onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item.nombre}
                </Text>

            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
        onPress={()=> props.changeModalVisibilityT(false)}
        style={styles.container}
        >
            <View style={[styles.modal,{width:WIDTH-10,height:(HEIGHT/2)+100}]}>
                <ScrollView>
                    {optiont}
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
        color:'#ffffff',
        margin:20,
        fontSize:20,
        fontWeight:'bold'
    }

})

export default PickerTank;