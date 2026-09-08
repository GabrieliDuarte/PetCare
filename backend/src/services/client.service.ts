import { pool } from "../database/connection.js";
import type { Cliente, CriarCliente } from "../types/cliente.js";

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
        dados: CriarCliente
    ): Promise<Cliente> {
        const res = await pool.query<Cliente>(
            `INSERT INTO clientes (nome, telefone, idade, email) 
                 VALUES ($1, $2, $3, $4) RETURNING *`,
            [dados.nome, dados.telefone, dados.idade, dados.email]
        );
        const cliente = res.rows[0];

        if (!cliente) {
            throw new Error("Cliente não retornado");
        }
        return cliente
    }
}

export const clienteService = new ClienteService();