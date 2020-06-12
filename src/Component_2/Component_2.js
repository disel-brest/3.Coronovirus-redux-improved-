import React from 'react';

//3
import { connect } from 'react-redux';
import { actionShowComponent } from '../actions';


function Component_2(props) {

    return (
        <>
            <hr/>
            <p>Компонент 2</p>
            <h5 className="card-title">Зараженные страны: <span id="counter"></span></h5>
            <button className="btn btn-success" id="async" onClick={props.propsActionShow}>Показать</button>
        </>
    );
}


export default connect(null, {propsActionShow: actionShowComponent}/*, mapDispatchToProps*/)(Component_2)
//export default Component_2;



