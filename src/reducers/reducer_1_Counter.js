const initialState = {
    beginCounter: 0
}

export const reducer_1_Counter = (state = initialState, action)=> {
    switch(action.type) {
        case 'PLUS': 
            return { ...state, beginCounter: state.beginCounter + 1 }
        case 'DEL': 
            return { ...state, beginCounter: state.beginCounter - 1 }
        case 'NULL': 
            return { ...state, beginCounter: action.payload }
    }
    return state
}