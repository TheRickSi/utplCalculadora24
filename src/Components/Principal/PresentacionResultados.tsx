import { useEffect, useRef, useState } from "react";
import { Image } from "react-bootstrap";
import ModalCustom from "../shared/ModalCustom";
import { ResponseGrades } from "../../Interfaces/ResponseGrades";

interface PresentacionResultadosInterface{
    results: ResponseGrades,
    breakpoint: boolean
}


function PresentacionResultados({results, breakpoint}: PresentacionResultadosInterface)
{
    const [src,setSrc] = useState("/assets/question.webp");
    const [message, setMessage] = useState("Ingresa tus datos para el calculo")
    const [modalShow, setModalShow] = useState(false);
    const isFirstRender = useRef(true);
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
        if (isFirstRender.current) {
            console.log(isFirstRender);
            isFirstRender.current = false; // Marca como montado
        }else{
            if (results.aprobado) {
                setModalShow(true);
                setSrc("/assets/approved.png");
                setMessage("¡Felicidades, estás aprobado!");
            } else {
                setModalShow(true);
                setSrc("/assets/sad.svg");
                setMessage("¡Sigue intentándolo!");
            }
        }
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