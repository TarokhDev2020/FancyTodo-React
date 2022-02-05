import React from 'react'
import {connect} from 'react-redux';
import {completeTodo} from '../../actions/todoActions';

const TodoItems = ({todo, completeTodo}) => {
    return (
        <div onClick = {() => completeTodo(todo.id)}>
            <li className = "data-id">
            {todo.todo}
            </li>
        </div>
    )
}

export default connect(null, {completeTodo})(TodoItems);
