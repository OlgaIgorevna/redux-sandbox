import {createStore, bindActionCreators} from 'redux';

import reducer from "./reducer";
/*import {inc, dec, rnd} from "./actions";*/
import * as actions from "./actions";
const store = createStore(reducer);
const {dispatch} = store;

const bindActionCreator = (funcCreator, dispatch)=>{
    return (...args)=>{
        dispatch(funcCreator(...args))
    }
};

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
/*const {incDispatch, decDispatch, rndDispatch } = bindActionCreators({
    incDispatch: inc,
    decDispatch: dec,
    rndDispatch: rnd
}, dispatch);*/
/*const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = ()=>{ dispatch(dec())};
const rndDispatch = bindActionCreator(rnd, dispatch);*/

document.getElementById("inc")
    /*.addEventListener("click", incDispatch);*/
    .addEventListener("click", inc);

document.getElementById("dec")
    .addEventListener("click", dec);

document.getElementById("rnd")
    .addEventListener("click", ()=>{
        const payload = Math.floor(Math.random()*10);
        rnd(payload);
    });

const update= ()=>{
    document.getElementById("counter").innerHTML = store.getState();
};

store.subscribe(update);
/*store.subscribe(()=>{
    console.log("store changed, state: ", store.getState());
});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});*/

/*let state = reducer(undefined, {});
state = reducer(state, {type: "INC"});
console.log(state);*/
