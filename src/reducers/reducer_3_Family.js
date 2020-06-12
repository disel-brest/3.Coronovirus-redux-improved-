const initialState = {
    family: ['Petrov', 'Sodorov']
}

export const reducer_3_Family = (state = initialState, action)=> {
    const { family } = state;

    switch(action.type) {
        case 'FAMILY':
            return { ...state, family: [...family, action.payload] }
    }
    return state
}