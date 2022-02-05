import React, {Fragment, useState} from 'react'
import Todos from './Todos';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/todoActions';

const TodoForm = ({addTodo}) => {

    const [todo, setTodo] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        const newTodo = {todo};
        addTodo(newTodo);
        setTodo('');
    }

    return (
        <Fragment>
            <form className = "form" onSubmit = {onSubmit}>
                <div>
                    <label className = "form__label" htmlFor = "todo">~ Today I need to ~</label>
                    <input className = "form__input" type = "text" id = "todo" name = "to-do" size = "30" required value = {todo} onChange = {e => setTodo(e.target.value)}/>
                    <button className = "button"><span>Submit</span></button>
                </div>
            </form>
            <div>
                <Todos/>
            </div>
        </Fragment>
    )
}

export default connect(null, {addTodo})(TodoForm);
