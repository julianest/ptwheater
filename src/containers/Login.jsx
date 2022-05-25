import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  loginAsync,
  loginGoogle,
  loginFacebookAction,
} from "../redux/actions/actionRegister";
import Section1App from "../components/Section1App";

const Login = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [usuarioValido, setUsuarioValido] = useState(false);
  const [user, setUser] = useState({
    correo: "",
    password: " ",
  });
  const handleInput = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
      [target.name]: target.value,
    });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync(user.correo, user.password));
  };

  return (
    <>
      <Section1App />
      <Container>
        {!usuarioValido && (
          <Container className="loginCont">
            <h1>Ingresa</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="correo"
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInput}
                />
              </Form.Group>
              <div className="ContButtons-login">
                <Button
                  variant="outline-primary"
                  type="submit"
                  className="buttons-login"
                >
                  Ingresar
                </Button>
                <Button
                  variant="outline-primary"
                  className="buttons-login"
                  onClick={() => dispatch(loginGoogle())}
                >
                  {" "}
                  Inicio con
                  <img
                    className="iconsInicio"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google button"
                  />
                </Button>
                <Button
                  variant="outline-primary"
                  className="buttons-login"
                  onClick={() => dispatch(loginFacebookAction())}
                >
                  Inicio con
                  <img
                    className="iconsInicio"
                    src="https://res.cloudinary.com/docutv7ug/image/upload/v1652654644/iconFacebook_iltudz.png"
                    alt="Facebook button"
                  />
                </Button>
              </div>
            </Form>
          </Container>
        )}
        <Link
          to="/register"
          style={{
            display: "flex",
            color: "Black",
            textAlign: "center",
            justifyContent: "center",
            margin: "5% 0% 10% 0%",
          }}
        >
          Si no tienes una cuenta puedes registrarte Aqui
        </Link>
      </Container>
    </>
  );
};
export default Login;
