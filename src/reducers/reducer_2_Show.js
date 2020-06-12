const initialState = {
    showComponent_3: false,
    countries: ['Италия', 'Россия', 'США', 'Германия', 'Китай', 'Франция']
}

export const reducer_2_Show = (state = initialState, action)=> {
    const { countries } = state;
    
    switch(action.type) {
        case 'SHOW': 
            return { ...state, showComponent_3: !state.showComponent_3 }
        case 'REMOVE': 
            return { ...state, countries: countries.filter( item => item !== action.payload) }
    }
    return state
}