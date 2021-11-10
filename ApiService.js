//http://10.0.2.2:4000/api/v1/appmovil
//const API="http://10.0.2.2:4000/api/v1/appmovil";
const API="http://192.175.10.112:4000/api/v1/appmovil";
//const API="https://vigilanciacalidadagua-test.azurewebsites.net/api/v1/appmovil";

export const authUser = async(us,pas)=>{
    const res = await fetch(`${API}/autenticacion/${us}/${pas}`,{
        method:'GET',
    });
    return await res.json();
}

export const getTanks = async ()=>{
    const res = await fetch(`${API}/tanques`,{
        method:'GET',
    });
    return await res.json();
}

export const getSamples = async ()=>{
    const res = await fetch(`${API}/muestrascompletadas`,{
        method:'GET',
    });
    return await res.json();
}

export const getSample = async(ids)=>{
    const res = await fetch(`${API}/muestra/${ids}`,{
        method:'GET',
    });
    return await res.json();
}


export const getIncompleteSamples= async(id)=>{
    const res = await fetch(`${API}/muestrasincompletas/${id}`,{
        method:'GET',
    });
    return await res.json();
}

export const NewSampleIncomplete = async(sample)=>{
    const res = await fetch(`${API}/nuevamuestra`,{
        method:'PUT',
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body:JSON.stringify(sample)
    });
    return await res.json();
}

export const threadActive = async()=>{
    const res = await fetch(`${API}/hilo`,{
        method:'GET',
    });
    return await res.json();    
}

export const updateSample = async (sample) => {
// console.log(taskId, newTask)
    const res = await fetch(`${API}/muestra`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sample),
    });
    //console.log(res.json())
    return await res.json();
  };
