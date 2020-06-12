export const actionAddCount = () => {
    return {
        type: 'PLUS',
        payload: null
    }
}

export const actionDelCount = () => {
    return {
        type: 'DEL',
        payload: null
    }
}

export const actionNullCount = () => {
    return {
        type: 'NULL',
        payload: 0
    }
}

export const actionShowComponent = () => {
    return {
        type: 'SHOW',
        payload: null
    }
}

export const actionAddFamily = (family) => {
    return {
        type: 'FAMILY',
        payload: family
    }
}

export const actionAddCity = (city) => {
    console.log(city)
    return {
        type: 'CITY',
        payload: city
    }
}

export const actionDelCountry = (delCountry) => {
    return {
        type: 'REMOVE',
        payload: delCountry
    }
}

//the same
// const actionAddCount3 = function (novoe) {
//     return {
//         type: 'PLUS',
//         payload: novoe
//     }
// }