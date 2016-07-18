// This file packs the widget(s) for use in a html file. Everything is packed into the file and should not harm
// the page that's using this
//import 'bootstrap/dist/css/bootstrap.css'; we dont require bootstrap because its not part of the widget
import 'styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, createMemoryHistory} from 'react-router';
//import createLocation from 'history';
import routes from './routes';

import {createHistory, useQueries} from 'history';

const qHistory = useQueries(createHistory)({
    stringifyQuery(obj) {
        return obj ? Object.keys(obj).sort().map(function(key) {
            const val = obj[key];

            if (val === undefined) {
                return '';
            }

            if (val === null) {
                return key;
            }

            if (Array.isArray(val)) {
                return val.slice().sort().map(function(val2) {
                    return key + '=' + val2;
                }).join('&');
            }

            return key + '=' + val;
        }).filter(function(x) {
            return x.length > 0;
        }).join('&') : '';
    }
});

let updatedLocation = '';
let queryTarget;
let queries;

let LibConfig = null;

qHistory.listen(function(location) {
    if (location.query.w !== updatedLocation) {
        queryTarget = location.query.w;
    }
    queries = location.query;
    queries.w = undefined;
});

import ReactGA from 'react-ga';
ReactGA.initialize('UA-79668478-1', {
    debug: false,
});

const location = '/'; //First page
const history = createMemoryHistory(location);

const createWithDefaultProps = (Component, props) => {
    // make sure you pass all the props in!
    return <Component {...props} domain={LibConfig.domain}
                                 inFitogram={LibConfig.inFitogram || false}
                                 inShop={LibConfig.inShop || false}
                                 loginTarget={queryTarget || LibConfig.loginTarget || null}
                                 trialOnly={LibConfig.trialOnly || false}
                                 language={LibConfig.language || localStorage.language || 'de'}
                                 query={LibConfig.query || queries}
                                 reactGA={ReactGA} />;
};

const logPageView = function() {
    if (LibConfig.inShop) {
        ReactGA.pageview('/' + LibConfig.domain + this.state.location.pathname);
    }
    else {
        ReactGA.pageview(window.location.pathname + this.state.location.pathname);
        updatedLocation = this.state.location.pathname;
        queries.w = this.state.location.pathname;
        qHistory.push({pathname: window.location.pathname, query: queries});
    }
};

export default {
    config(config) {
        LibConfig = config;
    },
    calendar: {
        //new: (config) => {
        new: () => {
            return {
                render: () => {
                    ReactDOM.render(
                        <Router history={history} location={location}
                                createElement={createWithDefaultProps} onUpdate={logPageView}>
                                {routes}
                        </Router>,
                        document.querySelector(LibConfig.selector)
                    );
                }
            };
        }
    }
};
