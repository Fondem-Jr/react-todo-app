import React from "react";
import style from "./TodoItem.module.css"

class TodoItem extends React.Component {
    render() {
        const completedStyle ={
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
        }
        const { completed, id, title } = this.props.todo;
        return (
            <li className={style.item}>
                <input type="checkbox"
                className={style.checkbox}
                checked={completed} onChange={() => this.props.handleChangeProps(id)}/> 
                    <button onClick={() => this.props.deleteTodoProps(id)}>
                        Delete
                    </button> 
                    <span style={this.props.todo.completed ? completedStyle : null}>
                    {title}
                    </span>
            </li>
        )
    }
}

export default TodoItem