import { pool } from "../database/connection.js"; 
import type { Cliente } from "../types/cliente.js"; 

class ClienteService {
    // Busca todos os clientes com tipagem
    async getAll(): Promise<Cliente[]> {
        try {
            const res = await pool.query<Cliente>("SELECT * FROM clientes");
            return res.rows; 
        } catch (error) {
            console.error("Erro ao buscar clientes:", error);
            throw new Error("Erro no banco de dados");
        }
    }

    // Cria um cliente novo com tipagem 
    async create(
        nome: string,
        telefone: string,
        idade: number,
        email: string
    ): Promise<Cliente> {
        try {
            const res = await pool.query<Cliente>(
                `INSERT INTO clientes (nome, telefone, idade, email) 
                 VALUES ($1, $2, $3, $4) RETURNING *`,
                [nome, telefone, idade, email]
            );
            return res.rows[0];
        } catch (error) {
            console.error("Erro ao criar cliente:", error);
            throw new Error("Erro ao salvar no banco de dados");
        }
    }
}

export const clienteService = new ClienteService();