import React from "react"
import styles from "./TodoItem.module.scss"

const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
}

class TodoItem extends React.Component {
    render() {
      const { completed, id , title } = this.props.todo
      return (
        <li className={styles.item}>
            <input type="checkbox" 
            className={styles.checkbox} 
            checked={completed} 
            onChange={() => this.props.handleChangeProps(id)} /> 
            <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button> 
            <span style={completed ? completedStyle : null}>
              {title}
            </span>
        </li>
      )
    }
  }
  
export default TodoItem