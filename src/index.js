import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { store } from './store';


//=============================================================================================
// const initialState = {
//     beginCounter: 0,
//     countries: ['Италия', 'Россия', 'США', 'Германия', 'Китай', 'Франция'],
//     showComponent_3: false,
//     family: ['Petrov', 'Sodorov'],
//     city: ['London', 'New York']
// };



//полностью записываем state ===================================================================
// const reducer = (state = initialState, action) => {
//   const { family } = state;
//   const { city } = state;
//   const { countries } = state;


//   if (action.type === 'PLUS') {
//     //return { ...state, beginCounter: action.payload}
//     return { ...state, beginCounter: state.beginCounter + 1 }
//   }
//   if (action.type === 'DEL') {
//     //return { ...state, beginCounter: action.payload}
//     return { ...state, beginCounter: state.beginCounter - 1 }
//   }
//   if (action.type === 'NULL') {
//     return { ...state, beginCounter: action.payload }
//     //return { ...state, beginCounter: state.beginCounter + 1}
//   }
//   if (action.type === 'SHOW') {
//     //return { ...state, beginCounter: action.payload}
//     return { ...state, showComponent_3: !state.showComponent_3 }
//   }
//   if (action.type === 'FAMILY') {
//     //return { ...state, beginCounter: action.payload}
//     return { ...state, family: [...family, action.payload] }        //[] при деструктуризации МАССИВ в СТРОКИ
//   }
//   if (action.type === 'CITY') {
//     //return { ...state, beginCounter: action.payload}
//     return { ...state, city: [ ...city, action.payload] }
//   }
//   if (action.type === 'REMOVE') {
//     //return { ...state, beginCounter: action.payload}
//     return { ...state, countries: countries.filter( item => item !== action.payload) }
//   }
//   return state
// }


//1-1  ===========================================================================================
  ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
