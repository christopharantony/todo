import React,{useState} from 'react';
import './App.css';

function App() {
  function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration === 'line-through'){
      item.style.textDecoration = 'none';

    }
    else{
      item.style.color='red';
      item.style.textDecoration = 'line-through';
    }
}
  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Tuesday 🌝 ☕ </h2>
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
                checkTodo(e)
                console.log('check',e.target.value)
                console.log('Obj',obj)
                setTodos(toDos.filter((obj2,index)=>{
                  if (obj2.id === obj.id) {
                    obj2.status = e.target.checked
                  }
                  return obj2;
                  }))
                }}
                style={{ textDecoration: obj.status ? "line-through" : "" }}
              value={obj.status} type="checkbox" name="" id="{obj.id}" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>{
              setTodos(toDos.filter((todo) => todo.id !== obj.id))
            }} className="fas fa-times"></i> 
          </div>
        </div>
          )
        })
        }
        <div className="todos">
        {/* <h2 className='completed'>Compled Tasks</h2>
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
        } */}
        </div>
      </div>
    </div>
  );
}

export default App;