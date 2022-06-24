import React,{useState} from 'react';
import './App.css';

function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Friday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value = {toDo} onChange = { (e)=>setTodo(e.target.value) } type="text" placeholder="🖊️ Add item..." />
        <i onClick = { ()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}]) } className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDos.map((obj)=>{
          return(
        <div className="todo">
          <div className="left">
            <input onChange = {
              (e)=>{
                console.log(e.target.value)
                console.log(obj)
                setTodos(toDos.filter(obj2=>{
                  if (obj2.id === obj.id) {
                    obj2.status = e.target.checked
                  }
                  return obj2;
                  }))
                }}
              value={obj.status} type="checkbox" name="" id="{obj.id}" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
          )
        })
        }
        <div className="todos">
        <h2 className='completed'>Compled Tasks</h2>
        {
          toDos.map((obj)=>{
            if (obj.status) {
              return ( 
                <div className='toDo'>
                  <div className='left'>
                  <h3 className='didList'>{obj.text}</h3> 
                  </div>
                </div>
                )
            }
            return null
          })
        }
        </div>
      </div>
    </div>
  );
}

export default App;