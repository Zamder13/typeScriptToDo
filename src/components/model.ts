import React, { useReducer } from 'react'


export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}


type Actions= {type:}




const TodoReducer =(state:Todo[], action)=>{}

const ReducerExample = () => {


  const [state, dispatch] = useReducer(TodoReducer, [])
  return (
    <div></div>
  )
}

export default ReducerExample
