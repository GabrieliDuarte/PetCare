//arquivo de Tipagens

export interface Cliente { //diz que qualquer objeto chamado Cliente no seu código tem que ter: um id em formato de texto, um nome (texto), um telefone (texto), uma idade (número) e um email (texto).
  id: string;
  nome: string;
  telefone: string;
  idade: number;
  email: string;
}

export interface CriarCliente {
  nome: string;
  telefone: string;
  idade: number;
  email: string;
}