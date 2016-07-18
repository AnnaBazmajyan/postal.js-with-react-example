// react
import React from 'react';
// store
import turrisExampleChannel from '../store';
import TodoListItem from './listItem.jsx';

// create component
const List2 = React.createClass({
    // initilize state
    getInitialState() {
        turrisExampleChannel.subscribe('getCoursesResponse', this.onResponse);
        // return state
        return {
            items: ['item3', 'item4'],
        };
    },
    onResponse({data}) {
        this.setState({items: data});
    },
    render() {
        return (
            <div className="turrisExample-component">
                Hey, me too! <br/>
                <ul>
                    {this.state.items.map(function(result) {
                        return <TodoListItem key={result.id}>{result}</TodoListItem>;
                    })}
                </ul>
            </div>
        );
    }
});

export default List2;
