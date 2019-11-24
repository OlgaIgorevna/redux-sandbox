import {createStore, bindActionCreators} from 'redux';
import React from 'react';
import ReactDom from 'react-dom';
import Counter from "./components/counter";
import reducer from "./reducer";
import App from "./components/app"
/*import {inc, dec, rnd} from "./actions";*/
import * as actions from "./actions";
import {Provider} from 'react-redux';

const store = createStore(reducer);

/*const bindActionCreator = (funcCreator, dispatch)=>{
    return (...args)=>{
        dispatch(funcCreator(...args))
    }
};*/

/*const {inc, dec, rnd} = bindActionCreators(actions, dispatch);/*/
/*const {incDispatch, decDispatch, rndDispatch } = bindActionCreators({
    incDispatch: inc,
    decDispatch: dec,
    rndDispatch: rnd
}, dispatch);*/
/*const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = ()=>{ dispatch(dec())};
const rndDispatch = bindActionCreator(rnd, dispatch);*/


ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root"));
const update= ()=>{
    ReactDom.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById("root"));
};

/*
update();
store.subscribe(update);
*/

