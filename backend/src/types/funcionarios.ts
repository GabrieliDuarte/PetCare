export interface FuncionarioProps {

    nome:string ;
    email: string;
    telefone: string;
    cargo_id: number;
    senha: string;
}

export interface ConsultaProps {

    animal_id: number;
    funcionario_id: number;
    data_consulta: string;
    motivo: string;

}

