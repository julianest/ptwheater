import {
  typeWheater,
  typeRegistration
} from "../../../redux/types/types"


describe("Test a los types", () => {


  //-------Pruebas a typeWheater--------//

  //---------Prueba 1-------//
  test("comparar objetos type Weather", () => {
    expect(typeWheater).toEqual({
      add: 'add',
      list: 'list',
      search: 'search',
    })
  })

  //---------Prueba 2-------//
  test("verificar el tipo de dato recibido de typeWheater", () => {
    expect(typeof typeWheater).toBe("object");
  })

  //-------Pruebas a typeRegistration--------//

  //---------Prueba 3-------//
  test("verificar el tipo de dato recibido de typeRegistration", () => {
    expect(typeof typeRegistration).toBe("object");
  })
  //---------Prueba 4-------//
  test("comparar objetos type Registration", () => {
    expect(typeRegistration).toEqual({
      register: "regist",
      login: "Login",
      logout: "Logout",
    })
  })
})