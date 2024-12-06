import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { FormDataGrades } from "../../Interfaces/FormDataInterface";
import { ResponseGrades } from "../../Interfaces/ResponseGrades";

interface FormularioNotasProps {
    onChange: (response: ResponseGrades) => void;
}
function FormularioNotas({onChange}) {
    // Estado para cada campo del formulario
    const [formData, setFormData] = useState<FormDataGrades>({
        ACBDB1: 0,
        APEB1: 0,
        AAB01: 0,
        AEPRB1:0,
        ACBDB2: 0,
        APEB2: 0,
        AAB02: 0,
        AEPRB2: 0,
        examenRecuperacion: 0
    });

    // Función para manejar el cambio de los inputs
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: parseFloat(value)
        }));
    };

    // Función para manejar el submit del formulario
    const handleSubmit = (e:any) => {
        e.preventDefault(); // Evitar el refresco de la página
        var promedioP1 = formData.AAB01 + formData.ACBDB1 + formData.AEPRB1 + formData.APEB1;
        var promedioP2 = formData.AAB02 + formData.ACBDB2 +formData.AEPRB2 + formData.APEB2;
        console.log(promedioP1,promedioP2)
        var promedioFinal = (promedioP1 + promedioP2 )/2;
        const aprobado = promedioFinal>=7;
        var response: ResponseGrades;
        if(aprobado){
             response = {
                notaMin: 0,
                promedioActual: promedioFinal,
                aprobado: true
            }
            onChange(response);
        }else{
            var notaParcial = ((formData.ACBDB1 + formData.APEB1 +formData.ACBDB2+ formData.APEB2)/2)*0.4615;
            var promedioFinalRecu = notaParcial + formData.examenRecuperacion;
            var notamin = 7 - promedioFinalRecu;
            response = {
                notaMin: notamin,
                promedioActual: promedioFinalRecu,
                aprobado: promedioFinalRecu>=7 
            }
        }
        
        
        console.log(response);
        onChange(response); // Aquí puedes manejar los datos del formulario como desees
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="mt-3">
                    <Col className="justify-content-center">
                        <Form.Label className="fs-4">PRIMER BIMESTRE</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-xl-6 col-12">
                        <Form.Label>ACBDB1</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Aprendizaje en contacto con el Docente (-/3.5)">
                            <Form.Control
                                type="number"
                                name="ACBDB1"
                                value={formData.ACBDB1}
                                onChange={handleChange}
                                placeholder="Nota real o especulativa"
                                defaultValue={0}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col className="col-xl-6 col-12">
                        <Form.Label>APEB1</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Aprendizaje practico experimental (-/3)">
                            <Form.Control
                                type="number"
                                name="APEB1"
                                value={formData.APEB1}
                                onChange={handleChange}
                                placeholder="Nota real o especulativa"
                                defaultValue={0}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col className="col-xl-6 col-12">
                        <Form.Label>AAB01</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Aprendizaje Autonomo (-/1)">
                            <Form.Control
                                type="number"
                                name="AAB01"
                                value={formData.AAB01}
                                onChange={handleChange}
                                placeholder="Nota real o especulativa"
                                defaultValue={0}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col className="col-xl-6 col-12">
                        <Form.Label>AAEPRB1</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Examen Final (-/2.5)">
                            <Form.Control
                                type="number"
                                name="AEPRB1"
                                value={formData.AEPRB1}
                                onChange={handleChange}
                                placeholder="Nota real o especulativa"
                                defaultValue={0}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col className="justify-content-center">
                        <Form.Label className="fs-4">SEGUNDO BIMESTRE</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-xl-6 col-12">
                        <Form.Label>ACBDB2</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Aprendizaje en contacto con el Docente">
                            <Form.Control
                                type="number"
                                name="ACBDB2"
                                value={formData.ACBDB2}
                                onChange={handleChange}
                                placeholder="Nota real o especulativa"
                                defaultValue={0}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col className="col-xl-6 col-12">
                        <Form.Label>APEB2</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Aprendizaje practico experimental">
                            <Form.Control
                                type="number"
                                name="APEB2"
                                value={formData.APEB2}
                                onChange={handleChange}
                                placeholder="Nota real o especulativa"
                                defaultValue={0}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col className="col-12">
                        <Form.Label>AAB02</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Aprendizaje Autonomo">
                            <Form.Control
                                type="number"
                                name="AAB02"
                                value={formData.AAB02}
                                onChange={handleChange}
                                placeholder="Nota real o especulativa"
                                defaultValue={0}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col className="col-xl-6 col-12">
                        <Form.Label>AAEPRB2</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Examen Final (-/2.5)">
                            <Form.Control
                                type="number"
                                name="AEPRB2"
                                value={formData.AEPRB2}
                                onChange={handleChange}
                                placeholder="Nota real o especulativa"
                                defaultValue={0}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col className="justify-content-center">
                        <Form.Label className="fs-4">RECUPERACION</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12">
                        <Form.Label>Examen de Recuperacion</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Nota de examen de recuperacion ">
                            <Form.Control
                                type="number"
                                name="examenRecuperacion"
                                value={formData.examenRecuperacion}
                                onChange={handleChange}
                                placeholder="Nota real o especulativa"
                                defaultValue={0}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Button type="submit" className="mt-3">Submit form</Button>
            </Form>
        </>
    );
}

export default FormularioNotas;
