// react
import React from 'react';
// store
import turrisExampleChannel from '../store';
import TodoListItem from './listItem.jsx';

// create component
const List1 = React.createClass({
    // initilize state
    getInitialState() {
        turrisExampleChannel.subscribe('getCoursesResponse', this.onResponse);
        // return state
        return {
            items: ['item1', 'item2'],
        };
    },
    onResponse({data}) {
        this.setState({items: data});
    },
    handleClick() {
        turrisExampleChannel.publish('getCoursesRequest', {request: 'coursesList'});
    },

    render() {
        return (
            <div className="turrisExample-component">
                I am Postal example component<br/>
                <ul>
                    {this.state.items.map(function(result) {
                        return <TodoListItem key={result.id}>{result}</TodoListItem>;
                    })}
                </ul>

                <button className="btn btn-default" onClick={this.handleClick}>
                    Get Courses From api!
                </button>
            </div>
        );
    }
});

export default List1;
