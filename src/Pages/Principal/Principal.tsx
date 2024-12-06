import { Container, Row, Col, Image } from "react-bootstrap";
import NavBar from "../../Components/shared/NavBar";
import FormularioNotas from "../../Components/Principal/FormularioNotas";
import { useEffect, useState } from "react";
import { ResponseGrades } from "../../Interfaces/ResponseGrades";

function Principal(){
    const [src,setSrc] = useState("./src/assets/question.webp");
    const [message, setMessage] = useState("Ingresa tus datos para el calculo")
    const [response, setRespose] = useState<ResponseGrades>({
        notaMin : 0,
        promedioActual:0,
        aprobado: false
    });
    useEffect(()=>{
        
    },[response])
    return(<>
        <NavBar/>
        <Container className="fluid" >
            <Row className="align-items-center">
                <Col className="col-md-6">
                    <FormularioNotas onChange={setRespose}/>
                </Col>
                <Col className="col-md-6 d-none d-md-block align-self mx-auto text-center">
                    <Image src={src} width={300} height={300} fluid/>
                    <h1>{message}</h1>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Principal;