import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../Components/shared/NavBar";
import FormularioNotas from "../../Components/Principal/FormularioNotas";
import { useState } from "react";
import { ResponseGrades } from "../../Interfaces/ResponseGrades";
import PresentacionResultados from "../../Components/Principal/PresentacionResultados";
import { useMediaQuery } from "react-responsive";

function ModalidadVirtual() {
    const isLessThanSm = useMediaQuery({ query: "(max-width: 575.98px)" });
    const [response, setResponse] = useState<ResponseGrades>({
        notaMin: 0,
        promedioActual: 0,
        aprobado: false,
    });
    const [isSubmitted, setIsSubmitted] = useState(false); // Nuevo estado para controlar envíos

    const handleFormSubmit = (results: ResponseGrades) => {
        setIsSubmitted(true);
        setResponse(results);
         // Marca como enviado al recibir los resultados
    };

    return (
        <>
            <Container className="fluid">
                <Row className="align-items-center">
                    <Col className="col-md-7">
                        <FormularioNotas onChange={handleFormSubmit} />
                    </Col>
                    <Col className="col-md-5 d-none d-md-block align-self mx-auto text-center">
                        {isSubmitted && ( // Presenta resultados solo si se ha enviado el formulario
                            <PresentacionResultados breakpoint={isLessThanSm} results={response} />
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ModalidadVirtual;
