import React, {Component} from 'react';
import {TodoListHeader} from "./todoListHeader";
import _ from 'lodash';
import TodoListItem from "./todoListItem";

export default class TodoList extends Component {
    renderItems = () => {
        const props = _.omit(this.props, 'todos')
        return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} {...props}/>)
    }

    render() {
        return (
            <div>
                <TodoListHeader/>
                <div>
                {this.renderItems()}
                </div>
            </div>
        )
    }
}