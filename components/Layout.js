import React from "react";
import { View,StyleSheet,StatusBar } from "react-native";

const Layout =({children})=>{
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#18284A"/>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        backgroundColor: "#18284A",
        padding:20,
        flex:1,
        alignItems:"center"
    }
})

export default Layout