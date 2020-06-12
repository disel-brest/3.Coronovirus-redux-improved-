import React from 'react';

//3
import { connect } from 'react-redux';

//
import { actionAddCount } from '../actions';
import { actionDelCount } from '../actions';
import { actionNullCount } from '../actions';


function Component_1(props) {

    //const addHandler = ()=> props.actionAddCount();  ненадо как в чистом react

    return (
        <>
            <p>Компонент 1</p>
            <h5 className="card-title">Количество зараженных короновирусом: <span id="counter">{props.novProps}</span></h5>
            <button className="btn btn-primary" id="add" onClick={props.propsActionAdd} >Увеличить</button>
            <button className="btn btn-danger" id="sub" onClick={props.propsActionDel}>Уменьшить</button>
            <button className="btn" id="sub" onClick={props.propsActionNull}>Сбросить</button>
        </>
    );
}


//4
const mapStateToProps = (state)=>{     //глобальный state=store
    return {
        //novProps: state.beginCounter           //приходит только то что надо
        novProps: state.reducer1.beginCounter    //приходит только то что надо
    };
}

// работает
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         propsActionAdd: ()=> dispatch(actionAddCount()),
//         propsActionDel: ()=> dispatch(actionDelCount()),
//         propsActionNull: ()=> dispatch(actionNullCount())
//     }
// }

//3-1  4-1
export default connect(mapStateToProps , {propsActionAdd: actionAddCount,
                                          propsActionDel: actionDelCount,
                                          propsActionNull: actionNullCount  /*mapDispatchToProps*/})(Component_1)  //connect прокмдывает ((state)(dispatch))
//export default Component_1;



