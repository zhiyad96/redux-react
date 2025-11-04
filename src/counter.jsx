import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addto, edittaskk, removetask } from './todoslice'

function counter() {
  const [name,setname]=useState("")
  const [asddress,setaddress]=useState("")
  const [editid,seteditid]=useState(null)
  const [editname,seteditname]=useState("")

  const dispatch=useDispatch();
  const todo=useSelector((state)=>state.todo.task||[])

  const addtodo=()=>{
    if(name.trim()&&asddress.trim())
      dispatch(addto({name,address:asddress}))
    setaddress("");
    setname("")
  }
  const  remove=(index)=>{
    dispatch(removetask(index))
  }
  const edittask=(todo)=>{
    seteditid(todo.id)
    seteditname(todo.name)
  }
  const handleupdate=()=>{
    dispatch(edittaskk({id:editid,name:editname}))
    seteditid(null);
    seteditname("")
  }
  return (
<>
    <input type="text" name='name' value={name} placeholder='Add your task' onChange={(e)=>setname(e.target.value)}/>
    <input type="text" name='name' value={asddress} placeholder='Add your task' onChange={(e)=>setaddress(e.target.value)}/>
    <button onClick={addtodo}>Add to do</button>

    {todo.map((todo)=><li key={todo.id}>{editid==todo.id?<>
    <input type="text" value={editname} onChange={(e)=>seteditname(e.target.value)} placeholder='edit to do' />
    <button onClick={handleupdate}>update </button>
    <button onClick={()=>seteditid(null)}>cancel </button>

    </>:<><span>name:{todo.name}/adddress:{todo.address}</span>
    <button onClick={()=>edittask(todo)}>edit</button>
    <button onClick={()=>remove(todo.id)}>delete</button>
    </>
  }</li>)}

</>  )
}

export default counter