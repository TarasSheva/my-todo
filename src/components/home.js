import React, {Component} from 'react';
import TodoList from "./todoList";
import CreateTodo from "./createTodo";
import _ from 'lodash'

const todos = [
    {
        task: 'make react tutorial',
        isCompleted: true
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
]


export default class Home extends Component {
    state = {
            todos: todos
        }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        })
        this.setState({
            todos: this.state.todos
        })
    }
    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task)
        foundTodo.isCompleted = !foundTodo.isCompleted
        this.setState({todos: this.state.todos})
    }

    saveTask (oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)

        foundTodo.task = newTask
        this.setState({
            todos: this.state.todos
        })
    }
    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete)
        this.setState({ todos: this.state.todos })
    }

    render() {
        return (
            <div className='head'>
                <h1>TODO LIST</h1>
                <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
                <TodoList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        )
    }
}