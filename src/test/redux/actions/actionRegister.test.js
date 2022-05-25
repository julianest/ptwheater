import {
  loginSync
  
} from "../../../redux/actions/actionRegister";
import { agregarGlobal } from "../../../redux/actions/actionWheater";
import { reducerWheater } from "../../../redux/reducers/reducerWheater";
import {
  typeRegistration,
  typeWheater
} from "../../../redux/types/types";

describe("Verificacion acciones de reducerRegister", () => {
  const user = "julian";
  const pass = "As1234";

  //-------Pruebas al Action Register--------//

  //---------Prueba 8-------//

  test("validacion al action login Sincronico", () => {
    const ActionLogin = loginSync(user, pass);

    expect(ActionLogin).toEqual({
      type: typeRegistration.login,
      payload: {
        user,
        pass
      }
    });
  })
//-------Pruebas al Action Wheater--------//

  //---------Prueba 9-------//
  test("validacion al action weather Sincronico", () => {
    const city = null
    const ActionWeather = agregarGlobal(city);

    expect(ActionWeather).toEqual({
      type: typeWheater.add,
      payload: city
      
    });
  })

    //---------Prueba 10-------//
  test("Estado (state) por default", ()=>{
    const initState = {
      city: {}
    };
    const action = {
      type: typeWheater.clima,
    };
    const state = reducerWheater(initState, action);
    expect(state).toEqual(initState)
  })

})