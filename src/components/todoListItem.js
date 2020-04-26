import React, {Component} from 'react';

export default class TodoListItem extends Component {

    state = {
        isEditing: false
    }


    onEditClick() {
        this.setState({
            isEditing: true
        })
    }

    onCancelClick() {
        this.setState({
            isEditing: false
        })
    }
    onSaveClick(e) {
        e.preventDefault()

        const oldTask = this.props.task
        const newTask = this.refs.editInput.value
        this.props.saveTask(oldTask, newTask)
        this.setState({
            isEditing: false
        })
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <div>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </div>
            )
        }
        return (
            <div>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </div>
        )
    }
    renderTaskSection() {
        const {task, isCompleted} = this.props

        const taskStyle = {
            color: isCompleted ? 'white' : '#0004bf',
            cursor: 'pointer',
            fontFamily: 'Comic Sans MS, Comic Sans, cursive'
        }
        if (this.state.isEditing) {
            return (
                <div>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input className='editInput' type="text" defaultValue={task} ref='editInput'/>
                    </form>
                </div>
            )
        }

        return (
            <div className='text'
                style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}
            >{task}</div>
        )
    }
    // dateNow () {
    //     const date = new Date()
    //     const dateTask = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    //     const str = dateTask.toString()
    //     return (
    //         <div className='date'>{str}</div>
    //     )
    // }

    render() {

        return (
            <div className='task'>
                {this.renderTaskSection()}
                {/*{this.dateNow()}*/}
                {this.renderActionsSection()}
            </div>
        )
    }
}