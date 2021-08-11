import React from 'react'

export const Todo = ({todo,onDelete}) => {
    return (
        <div className="container py-3">
       <div className="card"> <h4>{todo.title}</h4>
           <p>{todo.desc}</p> </div>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}} >Delete</button>
        </div>
    )
}
