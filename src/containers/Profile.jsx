import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ObtenerPerfil } from "../redux/actions/actionRegister";

const Perfil = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(ObtenerPerfil())}>Obtener Perfil</Button>
      <h1>EN CONSTRUCCION</h1>
    </div>
  );
};

export default Perfil;
