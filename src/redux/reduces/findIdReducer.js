export function findIdReducer (state = {findId: ''}, action){
    switch(action.type){
        case 'FIND_ID':
            return {...state,findId: action.id}
        
        default:
            return state 
    }
}