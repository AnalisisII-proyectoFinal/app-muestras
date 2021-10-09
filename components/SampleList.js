import React,{useEffect,useState} from "react";
import {FlatList,SafeAreaView,Alert,RefreshControl} from 'react-native';

import {getSamples} from '../ApiService.js';
import SampleItem from "./SampleItem.js";


const SampleList=()=>{
    const [samples,setSamples]= useState([]);

    const getSamplesApi= async ()=>{
        try {
            const samples = await getSamples();
            setSamples(samples.body)
            console.log(samples.body)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        getSamplesApi();
    },[])

    const renderItem=({item})=>(
        <SampleItem sample={item} />
    )

    return(
        <SafeAreaView>
            <FlatList
                data={samples}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id.toString()}
            />
        </SafeAreaView>
    )
}

export default SampleList;