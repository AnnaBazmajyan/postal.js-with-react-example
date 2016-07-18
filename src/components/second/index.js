// react
import React from 'react';
// store
import turrisExampleChannel from '../../store';
// template
import Template from './template.jsx';

// create component
const SecondComponent = React.createClass({
    // initilize state
    getInitialState() {
        turrisExampleChannel.subscribe('response', this.onResponse);
        // return state
        return {
            response1: 'Click the button from first component.',
        };
    },
    onResponse({data}) {
        this.setState({response1: data});
    },
    render: Template,
});

export default SecondComponent;
