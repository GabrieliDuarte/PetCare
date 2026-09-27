import { pool } from '../database/connection.js';

export interface EstoqueProps {
  nome_produto: string;
  quantidade: number;
  preco: number;
}

export class EstoqueService {
  
  async criar(data: EstoqueProps) {
    const query = `
      INSERT INTO estoque (nome_produto, quantidade, preco)
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;
    const values = [data.nome_produto, data.quantidade, data.preco];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM estoque WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE estoque 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}
