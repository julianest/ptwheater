import { useState } from 'react';
import { Button, Form, Container, Row, Col, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { RegisterAsync } from '../redux/actions/actionRegister';
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';




const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const [usuarioValido, setUsuarioValido] = useState(false)
  
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      correo: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: yup.object({
      nombre:
        yup.string().required("El Nombre es requerido").min(2, "Muy Corto"),
      apellido:
        yup.string().required("El Apellido es requerido").min(2, "Muy Corto"),
      correo:
        yup.string().required("El Correo es requerido").email("Debe ser un correo valido Ej: blockMaster@gmail.com").lowercase("El Correo debe estar en letras minusculas"),
      password:
        yup.string().required("El Password es requerido").matches(lowercaseRegex, "Como minimo una Letra en minuscula").matches(uppercaseRegex, "Como minimo una Letra en Mayuscula").min(6, "Minimo 6 Caracteres").max(10, "Maximo 10 Caracteres"),
      confirmPassword:
        yup.string().oneOf([yup.ref("password")], "las contraseñas no son iguales").required("Se debe ingresar el password"),
      terms:
        yup.bool().required().oneOf([true], 'Los terminos y condiciones deben ser aceptados'),
    }),

    onSubmit: (formData) => {
      setUsuarioValido(true)
      console.log(formData);
      // dispatch(AddProfile(formData));
      dispatch(RegisterAsync(formData.correo, formData.password));

    }
  })


  return (
    <>
      <main style={{ color: "Black",  }}>
        
        <Container className="containerRegister">
        <h1 className="h1Registrate">REGISTRATE</h1>
          {!usuarioValido && <Form noValidate onSubmit={formik.handleSubmit}   >
            <Row className="mb-2">
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik101"
                className="position-relative">
                <Form.Label>Nombre *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={formik.handleChange}
                  value={formik.values.nombre}
                  isValid={formik.touched.nombre && !formik.errors.nombre}
                  isInvalid={!!formik.errors.nombre}
                />
                <Form.Control.Feedback type="invalid" tooltip>{formik.errors.nombre}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik102"
                className="position-relative">
                <Form.Label>Apellido *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Apellido"
                  name="apellido"
                  onChange={formik.handleChange}
                  value={formik.values.apellido}
                  isValid={formik.touched.apellido && !formik.errors.apellido}
                  isInvalid={!!formik.errors.apellido}
                />
                <Form.Control.Feedback type="invalid" tooltip>{formik.errors.apellido}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik103"
                className="position-relative">
                <Form.Label>Correo *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="correo"
                  name="correo"
                  onChange={formik.handleChange}
                  value={formik.values.correo}
                  isValid={formik.touched.correo && !formik.errors.correo}
                  isInvalid={!!formik.errors.correo}
                />
                <Form.Control.Feedback type="invalid" tooltip>{formik.errors.correo}</Form.Control.Feedback>
              </Form.Group>
              
            </Row>
            <Row className="mb-2">
              <Form.Group
                as={Col}
                md="6"
                className="position-relative">
                <Form.Label htmlFor="inputPassword5">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  aria-describedby="passwordHelpBlock"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  isValid={formik.touched.password && !formik.errors.password}
                  isInvalid={!!formik.errors.password}
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid" tooltip>{formik.errors.password}</Form.Control.Feedback>
                <Form.Text id="passwordHelpBlock" muted>
                  *Entre 6-10 characteres
                  *1 Minuscula
                  *1 Mayuscula,
                  *1 Numero,
                  *Sin espacios.
                </Form.Text>
              </Form.Group>
              {/* Confirmar Contraseña */}
              <Form.Group
                as={Col}
                md="6"
                className="position-relative">
                <Form.Label htmlFor="inputPassword6">Confirmar Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  aria-describedby="passwordHelpBlock"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  isValid={formik.touched.confirmPassword && !formik.errors.confirmPassword}
                  isInvalid={!!formik.errors.confirmPassword}
                  autoComplete="off"

                />
                <Form.Control.Feedback type="invalid" tooltip>{formik.errors.confirmPassword}</Form.Control.Feedback>
                <Form.Text id="passwordHelpBlock" muted>
                  Debe Coincidir con la Contraseña
                </Form.Text>
              </Form.Group>
            </Row>
            <Row className="mb-2">
              
              {/* Aceptar Terminos y Condiciones */}
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik106"
                className="position-relative">
                <Form.Check
                  required
                  name="terms"
                  // label="Acepta terminos y condiciones *"
                  onChange={formik.handleChange}
                  isInvalid={!!formik.errors.terms}
                  feedback={formik.errors.terms}
                  feedbackType="invalid"
                  id="validationFormik106"
                  feedbackTooltip
                />
                <a href="#Terminos" onClick={handleShow}>
                Acepta terminos y condiciones *
                </a>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Terminos y Condiciones</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Si acepta quiere decir que esta dispuesto a <b>REGALARNOS</b> todo su capital sin hacer reclamacion alguna.</p>
                    <p>Todos los izquierdos reservados</p>
                    </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Form.Control.Feedback type="invalid" tooltip>
                  {formik.errors.file}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit" >Registrarse</Button>
            <Button type="submit" onClick={formik.handleReset} style={{ marginLeft: "10%" }} >Limpiar</Button>
            <Button onClick={() => navigate(-1)} style={{ marginLeft: "10%" }}>Regresar</Button>
          </Form>}
        </Container>
      </main>
    </>
  )
}
export default Register;