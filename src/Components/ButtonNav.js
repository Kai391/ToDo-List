import React from 'react'
import {Link} from 'react-router-dom';

export const ButtonNav = () => {
    return (
        <div className="container">
            <Link className="btn btn-primary mx-2 shadow-none" to="/AddTodo">Add To-Do</Link>
            <Link className="btn btn-primary mx-2 shadow-none" to="/">Back</Link>
        </div>
    )
}
