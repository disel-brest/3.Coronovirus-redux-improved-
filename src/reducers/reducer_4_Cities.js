const initialState = {
    city: ['London', 'New York']
}

export const reducer_4_Cities = (state = initialState, action)=> {
    const { city } = state;

    switch(action.type) {
        case 'CITY':
            return { ...state, city: [ ...city, action.payload] }
    }
    return state
}