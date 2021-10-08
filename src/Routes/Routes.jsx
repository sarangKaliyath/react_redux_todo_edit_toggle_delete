import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Todo } from '../Components/Todos';
import { TodoList } from '../Components/TodoList';
import { EditTodo } from '../Components/EditTodo';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Todo />
                <TodoList/>
            </Route>
            <Route path="/edit/:id">
                <EditTodo/>
            </Route>
        </Switch>
    )
}
