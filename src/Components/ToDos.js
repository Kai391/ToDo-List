import React, { useState } from 'react'
import { TodoItem } from "./TodoItem";
import { Addtodo } from "./Addtodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ButtonNav} from './ButtonNav';
import {Message} from './Message';

export const ToDos = () => {
    const [todos, setTodos] = useState(
        [
            {
                sno: 1,
                title: "Go to bath",
                desc: "You have not bath yet!"
            },
            {
                sno: 2,
                title: "Go to market",
                desc: "You have to bring some things!"
            },
            {
                sno: 3,
                title: "Do Assignment",
                desc: "Pravin sir had gave us assignment on OS!"
            },
        ]
    );
    const onDelete = (todo) => {
        console.log("Deleted todo:", todo.title);
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));

    }
    const addTodo = (a, b) => {
        console.log(a, b);
        let sno = todos.length + 1;
        const addtodo = {
            sno: sno,
            title: a,
            desc: b
        }
        setTodos([...todos, addtodo]);
        // console.log(todos);
    }
    return (
        <>
            <Router>
                {todos.length>3?
                <Message message="Success Fully Updated!"/>:null}
                <ButtonNav />
                <Switch>
                    <Route exact path="/AddTodo">
                        <Addtodo addTodo={addTodo} />
                    </Route>
                    <Route exact path="/" render={() => {
                        return (
                            <div className="container">
                                <h3 className="text-center my-2">ToDos List</h3>
                                {todos.length === 0 ? "No list of todos today!" :
                                    todos.map((todo) => {
                                        return (
                                            <TodoItem
                                                key={todo.sno}
                                                todo={todo}
                                                onDelete={onDelete} />
                                        )
                                    })}
                            </div>
                        )
                    }}>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
