export  const  middleware =(store)=>(next)=>(action)=>{
    console.log("dispatch:",action);
    const result =next(action);
    console.log('next state:', store.getState())
    return result
} 