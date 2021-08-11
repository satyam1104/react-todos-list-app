import React from 'react'
import {Todo} from "./Todo"

export const Todos = (props) => {
    return (
        <div>
            <h3 className="container py-3">TODOS</h3>
            {props.todos.length===0 ? <div className="card bg-dark text-white">NO TODOS TO DISPLAY</div>:
            props.todos.map((todo)=>{
                return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })}
        </div>
    )
}
