import { pool } from '../database/connection.js';

export interface ServicoProps {
  nome: string;
  descricao: string;
  preco: number;
}

export class ServicoService {
  
  async criar(data: ServicoProps) {
    const query = `
      INSERT INTO servicos (nome, descricao, preco)
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;
    const values = [data.nome, data.descricao, data.preco];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM servicos WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE servicos 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}