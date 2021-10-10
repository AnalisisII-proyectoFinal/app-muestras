//http://10.0.2.2:4000/api/v1/appmovil
const API="http://localhost:4000/api/v1/appmovil";


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


/*
export const updateTask = async (taskId, newTask) => {
    console.log(taskId, newTask)
    const res = await fetch(`${API}/${taskId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    return res;
  };
  */