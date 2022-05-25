import {typeWheater} from "../types/types"

export const agregarGlobal = (city) => {
  return {
    type: typeWheater.add,
    payload: city
    }
}