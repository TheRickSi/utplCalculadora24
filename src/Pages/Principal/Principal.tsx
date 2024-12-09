import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../Components/shared/NavBar";
import FormularioNotas from "../../Components/Principal/FormularioNotas";
import { useEffect, useState } from "react";
import { ResponseGrades } from "../../Interfaces/ResponseGrades";
import PresentacionResultados from "../../Components/Principal/PresentacionResultados";
import { useMediaQuery } from "react-responsive";

function Principal(){
    const isLessThanSm = useMediaQuery({ query: '(max-width: 575.98px)' });
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
                <Col className="col-md-7">
                    <FormularioNotas onChange={setRespose}/>
                </Col>
                <Col className="col-md-5 d-none d-md-block align-self mx-auto text-center">
                    <PresentacionResultados breakpoint={isLessThanSm} results={response}/>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Principal;