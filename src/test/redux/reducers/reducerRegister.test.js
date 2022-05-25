import { reducerRegister } from "../../../redux/reducers/reducerRegister";
import { typeRegistration } from "../../../redux/types/types";

describe("Pruebas en reducerRegister", ()=>{
  
  //-------Pruebas al ReducerRegister--------//

//---------Prueba 5-------//
    test("Validar que login sea funcional y reciba datos", ()=>{
    const initState = {};
    const action = {
        type: typeRegistration.login,
        payload: {  
          user: "Julian",
          pass: "As1234"
        }
    };
    const state = reducerRegister(initState, action);
      expect(state).toEqual({
        user: "Julian",
        pass: "As1234"
      })
  })


  //---------Prueba 6-------//
  test("Prueba de cierre de cesion - logout", ()=>{
    const initState = {
      user: "Julian",
      pass: "As1234"
    };
    const action = {
      type: typeRegistration.logout
    }
    const state = reducerRegister(initState, action);
    expect(state).toEqual({});
  })

    //---------Prueba 7-------//
  test("Estado (state) por default", ()=>{
    const initState = {
      user: "Julian",
      pass: "As123"
    };
    const action = {
      type: typeRegistration.ingresamos,
    };
    const state = reducerRegister(initState, action);
    expect(state).toEqual(initState)
  })
})