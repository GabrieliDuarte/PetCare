import { pool } from '../database/connection.js';

export interface ParceiroProps {
  nome: string;
  cnpj: string;
  telefone: string;
  email: string;
}

export class ParceiroService {
  
  async criar(data: ParceiroProps) {
    const query = `
      INSERT INTO parceiros (nome, cnpj, telefone, email)
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    const values = [data.nome, data.cnpj, data.telefone, data.email];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM parceiros WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE parceiros 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}