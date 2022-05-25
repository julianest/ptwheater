import {typeWheater} from "../types/types"
const initialState = {
	city: {}
}
export const reducerWheater = (state = initialState, action)=>{
  switch(action.type){
    case typeWheater.add:
      return {
        ...state,
        city: action.payload
      }
      case typeWheater.list:
        return {
          city: [...action.payload]
        }
    default:
        return state
  }


}