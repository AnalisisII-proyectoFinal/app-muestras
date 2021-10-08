"use strict";
//@ts-check
/**
 * Clase de peticiones http
 * @module peticiones-app-movil - clase handler
 * @author kpilo 
 * @copyright - ksksue
 * @version 1.0
 */
class ApiServices {
    constructor(){
        this.url ='http://10.0.2.2:4000/api/v1/app';
    }
    obtnerEncabezado(){
        return{
            "Content-type":"application/json"
        }
    }
    hacerPeticion(peticion,params,tipopeticion){
        return new Promise((resolve,reject)=>{
            console.log('enviando parametros')
            fetch(this.url + (peticion ||''),{
                headers: this.obtnerEncabezado(),
                method: tipopeticion,
                body: tipopeticion !== 'GET' ? JSON.stringify(params): null
            })
            .then((response)=>{
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response
            })
            .then(response =>{
                return response.json();
            }).then(data =>{
                resolve(data);
            })
            .catch(error=>{
                console.log('request error',error);
                reject(new Error(error));
            })
        })
    }
}

export default ApiServices;