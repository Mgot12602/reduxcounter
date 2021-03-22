import ActionTypes from './actiontypes'
const initialState = {
    count2: 0,
    count3:10
}
export default function counterReducer (state = initialState,action){
switch(action.type) {
case ActionTypes.INCREASE_COUNT:
return {count2: state.count2 + 1, count3:state.count3}
case ActionTypes.DECREASE_COUNT:
        return { count2: state.count2 - 1 , count3:state.count3}
    case ActionTypes.MULTIPLY:
        return {count2:state.count2, count3: state.count3*2}
default:
return state
 }
}