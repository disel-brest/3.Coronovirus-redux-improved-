import { combineReducers } from "redux";

import { reducer_1_Counter } from "./reducer_1_Counter";
import { reducer_2_Show } from "./reducer_2_Show";
import { reducer_3_Family } from "./reducer_3_Family";
import { reducer_4_Cities } from "./reducer_4_Cities";

//my state
const reducers = combineReducers({
    reducer1: reducer_1_Counter,            // reducer1: beginCounter: 0
    reducer2: reducer_2_Show,               // reducer2: showComponent_3: false, countries: ['Италия', 'Россия', 'США', 'Германия', 'Китай', 'Франция']
    reducer3: reducer_3_Family,             // reducer3: family: ['Petrov', 'Sodorov']
    reducer4: reducer_4_Cities              // reducer4: city: ['London', 'New York']
})

export default reducers;