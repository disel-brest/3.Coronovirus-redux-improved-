import React, { Component } from 'react';

//3
import { connect } from 'react-redux';
//
import { actionAddFamily } from '../actions';
import { actionAddCity } from '../actions';

class Component_4 extends Component {

    state = {
        inputValue: ''
    }

    idCity = React.createRef();

    render() {
        return (
            <>
                <hr/>
                <p>Компонент 4</p>
                {/*control components (контролирует данные через state)*/}
                <input type='text' 
                       placeholder='Введите Фамилию'
                       onChange={ (event)=> {
                            this.setState ({
                                inputValue: event.target.value
                            });
                            //this.state.inputValue = event.target.value;
                       }}
                >
                </input>
                <button onClick={ ()=> {this.props.propsAddFamily(this.state.inputValue);} }>Создать</button>  //как очистить поле?
                <p></p>
                <ul>
                    {this.props.spicokFamily.map( (item, index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>
    
                {/*uncontrol components (не контролирует данные, потому что через ref(т.е берутся данные внутри компонента) )*/}
                <input type='text'
                       placeholder='Введите город'
                       ref = {this.idCity}
                >
                </input>
                <button onClick={ ()=> { this.props.propsAddCity(this.idCity.current.value); this.idCity.current.value = ''} }>Создать</button>
                <p></p>
                <ul>
                    {this.props.spicokCity.map( (item, index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </>
        );
    }

}

//4
const mapStateToProps =(state)=>{
    return {
        //spicokFamily: state.family,
        //spicokCity: state.city
        spicokFamily: state.reducer3.family,
        spicokCity: state.reducer4.city
    }
}

//не работает
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         propsAddFamily: ()=> dispatch(actionAddFamily()),
//         propsAddCity: ()=> dispatch(actionAddCity())
//     }
// }

export default connect(mapStateToProps , {propsAddFamily: actionAddFamily,
                                          propsAddCity: actionAddCity } /*или mapDispatchToProps*/)(Component_4);
//export default Component_4;








