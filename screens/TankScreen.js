import React from "react";
import {Text,StyleSheet} from 'react-native';
import Layout from '../components/Layout';
import TanksList from "../components/TanksList";
const TankScreen = ()=>{
    return(
        <Layout>
           <TanksList />
        </Layout>
    )
}



export default TankScreen;