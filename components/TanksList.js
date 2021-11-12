import React,{useEffect,useState} from "react";
import {FlatList,SafeAreaView} from 'react-native';

import {getTanks} from '../ApiService.js';
import TankItem from "./TankItem.js";

const TanksList=()=>{
    const [tanks,setTanks]= useState([]);

    const getTanksApi= async ()=>{
        try {
            const tanks = await getTanks();
            setTanks(tanks.body)
            console.log(tanks.body)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        getTanksApi();
    },[])

    const renderItem=({item})=>(
        <TankItem tank={item} />
    )

    return(
        <SafeAreaView>
            <FlatList
                data={tanks}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id.toString()}
            />
        </SafeAreaView>
    )
}

export default TanksList;