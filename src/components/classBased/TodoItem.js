import React from "react"
import styles from "./TodoItem.module.scss"

const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
}

class TodoItem extends React.Component {

  state = {
    editing: false
  }

  componentWillUnmount() {
    console.log("Cleaning up...")
  }
  
  handleEditing = e => {
    this.setState({
      editing: true
    })
  }
  
  handleUpdateDone = e => {
    if (e.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    const { completed, id , title } = this.props.todo

    let viewMode = {}
    let editMode = {}
    
    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input type="checkbox" 
          className={styles.checkbox} 
          checked={completed} 
          onChange={() => this.props.handleChangeProps(id)} /> 
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button> 
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input type="text" className={styles.textInput} style={editMode} value={title} 
        onChange={(e) => this.props.setUpdate(e.target.value, id)} 
        onKeyDown={this.handleUpdateDone}
        />
      </li>
    )
  }
}
  
export default TodoItem