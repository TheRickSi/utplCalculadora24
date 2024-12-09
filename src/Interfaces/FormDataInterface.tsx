export interface FormDataGrades {
    ACBDB1: number;
    APEB1: number;
    AAB01: number;
    AEPRB1:number;
    ACBDB2: number;
    APEB2: number;
    AAB02: number;
    AEPRB2:number;
    examenRecuperacion: number;
}

export interface FormDataGradesPresencial {
    ACBDB1: number;
    APEB1: number;
    AAB01: number;
    ACBDB2: number;
    APEB2: number;
    AAB02: number;
    examenRecuperacion: number;
}

// Definimos la interfaz para las props del componente
export interface FormularioNotasProps {
    onChange: (formData: FormData) => void;
}