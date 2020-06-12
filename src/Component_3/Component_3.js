import React from 'react';

//3
import { connect } from 'react-redux';

//
import { actionDelCountry } from '../actions';

function Component_3(props) {

    return (
        <>
            <hr/>
            <p>Компонент 3</p>
            <ul>
                {props.coutriesProps.map( (item, index)=>{
                    return  <li key={index}> {item} <button onClick={ ()=> props.propsDelCountry(item) }>del</button></li>
                } )}
            </ul>
        </>
    );
}

//4
const mapStateToProps = (state)=>{     //глобальный state=store
    return {
        //coutriesProps: state.countries     //приходит только то что надо
        coutriesProps: state.reducer2.countries     //приходит только то что надо
    };
}

//3-1  4-1
export default connect(mapStateToProps, {propsDelCountry: actionDelCountry} /*, mapDispatchToProps*/)(Component_3)
//export default Component_3;



