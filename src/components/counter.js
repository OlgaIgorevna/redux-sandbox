import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
/*import {inc, dec, rnd} from "../actions";*/
import * as actions from "../actions";

const Counter = ({counter, inc, dec, rnd})=>{
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button onClick={dec} className="btn btn-primary btn-lg">DEC</button>
            <button onClick={inc} className="btn btn-primary btn-lg">INC</button>
            <button onClick={rnd} className="btn btn-primary btn-lg">random</button>
        </div>
    )

};
const mapStateToProps =  (state)=>{
    return {counter : state}
};
const mapDispatchToProps =  (dispatch)=>{
    return bindActionCreators(actions, dispatch);

/*    const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
    return {
        inc: inc,
        dec: dec,
        rnd: rnd
    }*/
};
/*export default connect(mapStateToProps, mapDispatchToProps)(Counter);*/
export default connect(mapStateToProps, actions)(Counter);