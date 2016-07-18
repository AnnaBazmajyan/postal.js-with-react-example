import React from 'react';

const TodoListItem = React.createClass({
    render(){
        return (
            <li>{this.props.children}</li>
        );
    }
});
export default TodoListItem;
