// react
import React from 'react';
//import LeftCol from './first/index.js';
//import RightCol from './second/index.js';

import List1 from './list1.jsx';
import List2 from './list2.jsx';
// create component
const MainComponent = React.createClass({
    /*getInitialState() {
        return {items: []};
    },
    updateItems(newItem) {
        const allItems = this.state.items.concat([newItem]);
        this.setState({items: allItems});
    },*/
    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <List1 />
                </div>
                <div className="col-sm-6">
                    <List2 />
                </div>
            </div>
        );

        /*return (
          <div className="row">
            <div className="col-sm-6">
              <LeftCol {...this.props}/>
            </div>
            <div className="col-sm-6">
              <RightCol {...this.props}/>
            </div>
          </div>
        );*/
    }
});

export default MainComponent;
