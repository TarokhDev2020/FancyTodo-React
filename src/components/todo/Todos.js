import React, {useEffect} from 'react'
import TodoItems from './TodoItems';
import {connect} from 'react-redux';
import {getTodos} from '../../actions/todoActions';

const Todos = ({todo: {todos, loading}, getTodos}) => {

    useEffect(() => {
        getTodos();
    }, [])

    return (
        <div>
            <ul className = "toDoList">
                {todos !== null && todos.map(todo => (
                    <TodoItems key = {todo.id} todo = {todo}/>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {todo: state.todo}
}

export default connect(mapStateToProps, {getTodos})(Todos);
