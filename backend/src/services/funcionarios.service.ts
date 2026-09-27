import { pool } from '../database/connection.js';

export interface FuncionarioProps {
  nome: string;
  email: string;
  telefone: string;
  cargo_id: number;
}

export class FuncionarioService {
  
  async criar(data: FuncionarioProps) {
    const query = `
      INSERT INTO funcionarios (nome, email, telefone, cargo_id)
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    const values = [data.nome, data.email, data.telefone, data.cargo_id];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM funcionarios WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE funcionarios 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}