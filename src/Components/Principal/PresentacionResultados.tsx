import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import ModalCustom from "../shared/ModalCustom";

function PresentacionResultados({results, breakpoint})
{
    const [src,setSrc] = useState("./src/assets/question.webp");
    const [message, setMessage] = useState("Ingresa tus datos para el calculo")
    const [modalShow, setModalShow] = useState(false);
    let mensajeResultado = (
        <>
            <Image src={src} width={300} height={300} fluid/>
            <p className="mt-3">{message}</p>
            <p>
            <b>Promedio Actual: </b> {results.promedioActual} <br/>
            {results.aprobado ? <></>:
                <><b>Nota minima en el examen de recuperacion: </b> {results.notaMin}</>
            }
            </p>
            
        </>
    );
    useEffect(() => {
        if (results.aprobado) {
            setModalShow(true);
            setSrc("./src/assets/approved.png");
            setMessage("¡Felicidades, estás aprobado!");
        } else {
            setModalShow(true);
            setSrc("./src/assets/sad.svg");
            setMessage("¡Sigue intentándolo!");
        }
        console.log(breakpoint)
    }, [results]);
    return(
        <>
            {breakpoint ? (
                <ModalCustom show = {modalShow} title = "Resultados" onHide={() => setModalShow(false)}>
                    {mensajeResultado}
                </ModalCustom>
            ) : mensajeResultado}
        </>
    );
}

export default PresentacionResultados;