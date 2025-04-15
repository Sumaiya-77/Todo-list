
// import React, { useState } from 'react'

// const Todo = () => {
//   let [todolist, setTodolist] =useState([])
//   let todoname =(event)=>{
//      let toname = event.target.toname.value
//      if(!todolist.includes(toname)){
//       let finallist =[...todolist,toname]
//       setTodolist(finallist)
//      }
//      else{
//       alert('already exist')
//      }
//     event.preventDefault()
//   }
//   let list = todolist.map((value,index)=>{
//     return(
//       <Todolistitems value={value} key ={index} indexNumber ={index} todolist={todolist}
//       setTodolist={setTodolist}
//       />
//     )
//   })
//   return (
//     <div>
//       <h1>Todo list</h1>
//       <form onSubmit={todoname}>
//         <input type="text" name='toname' /><button>save</button>
//       </form>
//       <div className="outerdiv">
//         <ul>
//        {list}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Todo

// function Todolistitems({value,indexNumber,todolist,setTodolist}){
// let[status,setStatus]=useState(false)
//   let deleterow=()=>{
//     let finalData = todolist.filter((v,i)=>i!=indexNumber)
//     setTodolist(finalData)
//   }
//   let checkstatus =()=>{
//     setStatus(!status)
//   }
//   return(
//     <li className ={(status)?'complete':''}onClick={checkstatus}>{indexNumber}{value} <span onClick={deleterow}>&times;</span></li>
//   )
// }

import React, { useState } from 'react'

const Todo = () => {
  let [todolist,setTodolist]=useState([])
  let listitem = (event)=>{
    let todoname =event.target.todoname.value
    if(!todolist.includes(todoname)){
      let finallist =[...todolist,todoname]
      setTodolist(finallist)
    }
    else{
      alert('already exist')
    }
    event.preventDefault();
  }
  let list = todolist.map((value, index)=>{
    return(
    <Todoitemmark  value={value} key ={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist}/>
  )
  })
  return (
    <div className='my-app'>
      <h1>Todo list here⬇️</h1>
      <form on onSubmit={listitem}>
        <input type="text" name='todoname' /> <button>save</button>
      </form>
      <div className="outerdiv">
        <ul>
        {list}
        </ul>
      </div>
    </div>
  )
}

export default Todo
function Todoitemmark({value, indexNumber,index, todolist, setTodolist}){
let [status, setStatus]=useState(false)
  let deleterow =()=>{
    let finalData = todolist.filter((v,i)=>i!=indexNumber)
    setTodolist(finalData)
  }
  let checkstatus =()=>{
    setStatus(!status)
  }
  return(
    <li className={(status)?'complete':''} onClick={checkstatus}>{value} <span onClick={deleterow}>&times;</span></li>
  )
}