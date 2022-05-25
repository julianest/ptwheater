import {
  loginSync
  
} from "../../../redux/actions/actionRegister";
import {
  typeRegistration
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

})