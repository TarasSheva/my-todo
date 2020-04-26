import React, {Component} from 'react';
import _ from 'lodash';

export default class CreateTodo extends Component {
    state = {
        error: null
    }

    handlerCreate(e) {
        e.preventDefault()

        const date = new Date()
        const dateTask = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`


        const createInput = this.refs.createInput
        const task = createInput.value + ' ' + dateTask
        const validateInput = this.validateInput(task)

        if (validateInput) {
            this.setState({ error: validateInput})
            return
        }

        this.setState({error: null})
        this.props.createTask(task)
        this.refs.createInput.value = ''
    }
    validateInput(task) {
        if (!task) {
            return 'Please enter a task.'
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exist.'
        } else {
            return  null
        }

    }
    renderError() {
        if (!this.state.error) { return null }
        return <div style={{color: 'red'}}>{this.state.error}</div>
    }

    render() {
        return (
            <form onSubmit={this.handlerCreate.bind(this)}>
                <input className='input' type="text" placeholder='What do I need to do?' ref='createInput'/>
                <button className='btn'>Create</button>
                {this.renderError()}
            </form>
        )
    }
}