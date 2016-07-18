// react
import React from 'react';

const render = function() {
    return (
        <div className="turrisExample-component">
            Hey, me too!<br/>
            <b>{this.state.response1}</b><br/>
        </div>
    );
};

export default render;
