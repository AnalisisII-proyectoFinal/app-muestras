import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import MenuScreen from './screens/MenuScreen.js';
import NewSampleScreen from './screens/NewSampleScreen.js';
import SampleScreen from './screens/SampleScreen.js';
import TankScreen from './screens/TankScreen.js';
import EditSampleScreen from './screens/EditSampleScreen.js';


const Stack = createNativeStackNavigator()

const App =()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{
            title:'AGUA Y SANEAMIENTO',
            headerStyle:{backgroundColor:"#18284A"},
            headerTitleStyle:{color:"#ffffff"}, 
          }}
        />
        <Stack.Screen 
        name="MenuScreen" component={MenuScreen}
        options={{
          title:'Menu Principal',
          headerStyle:{backgroundColor:"#18284A"},
          headerTitleStyle:{color:"#ffffff"},
          headerTintColor:"#ffffff",  
        }}
        />
        <Stack.Screen 
          name="NewSampleScreen" component={NewSampleScreen}
          options={{
            title:'Nueva Muestra',
            headerStyle:{backgroundColor:"#18284A"},
            headerTitleStyle:{color:"#ffffff"},
            headerTintColor:"#ffffff", 
          }}/>
          <Stack.Screen 
          name="SampleScreen" component={SampleScreen}
          options={{
            title:'Muestras',
            headerStyle:{backgroundColor:"#18284A"},
            headerTitleStyle:{color:"#ffffff"},
            headerTintColor:"#ffffff",
          
          }}/>
           <Stack.Screen 
          name="EditSampleScreen" component={EditSampleScreen}
          options={{
            title:'Editar Muestra',
            headerStyle:{backgroundColor:"#18284A"},
            headerTitleStyle:{color:"#ffffff"},
            headerTintColor:"#ffffff",
          }}/>
          <Stack.Screen 
          name="TankScreen" component={TankScreen}
          options={{
            title:'Tanques',
            headerStyle:{backgroundColor:"#18284A"},
            headerTitleStyle:{color:"#ffffff"},
            headerTintColor:"#ffffff", 
          }}/>
          <Stack.Screen 
          name="LoginScreen" component={LoginScreen}
          options={{
            title:'Autenticacion',
            headerStyle:{backgroundColor:"#18284A"},
            headerTitleStyle:{color:"#ffffff"},
            headerTintColor:"#ffffff",  
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

/**
 <Stack.Screen 
          name="MuestraScreen" 
          component={MuestrasScreen} 
          options={({navigation})=>({
            title:'Muestras',
            headerStyle:{backgroundColor:"#18284A"},
            headerTitleStyle:{color:"#ffffff"},
            headerTintColor:"#ffffff",
            headerRight:()=>(
            <TouchableOpacity 
              onPress={()=> navigation.navigate("IngresoScreen")}>
              <Text style={{color:"#ffffff",marginRight:20,fontSize:15}}>new</Text>
            </TouchableOpacity>
            ),
            })}/>



              /*
            headerRight:()=>(
              <TouchableOpacity 
                onPress={()=> navigation.navigate("NewSampleScreen")}>
                <Text style={{color:"#ffffff",marginRight:20,fontSize:15}}>Nueva</Text>
              </TouchableOpacity>
              ), 
 * 
 */