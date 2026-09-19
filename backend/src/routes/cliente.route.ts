//O Router cria o roteador, e Request e Response são os tipos que o TypeScript usa para entender o que entra (requisição) e o que sai (resposta).
//O Express facilita a criação das URLs (rotas) da API.
import { Router, type Request, type Response } from "express";
import { clienteService } from "../services/client.service.js"; 
import type { CriarCliente } from "../types/cliente.ts"; 

export const clienteRouter = Router();

// Rota GET: Busca todos os clientes
clienteRouter.get("/", async (_request: Request, response: Response) => {
    try {
        const clientes = await clienteService.getAll();
        return response.json(clientes);
    } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        return response.status(500).json({ error: "Erro interno do servidor" });
    }
});

// Rota POST: Cadastra um novo cliente 
clienteRouter.post("/", async (request: Request<object, object, CriarCliente>, response: Response) => {
    try {
        const dados = request.body;
        
        const cliente = await clienteService.create(dados);

        // Status 201 significa "Criado com sucesso"
        return response.status(201).json(cliente);
    } catch (error) {
        console.error("Erro ao criar cliente:", error);
        return response.status(500).json({ error: "Erro interno do servidor" });
    }
});

// Rota GET: Busca um cliente pelo ID
clienteRouter.get("/:id", async (request: Request, response: Response) => {
    try {
        const id = request.params.id as string;
        const cliente = await clienteService.getById(id);
        
        return response.json(cliente);
    } catch (error: any) {
        if (error.message === "CLIENTE_NAO_ENCONTRADO") {
            return response.status(404).json({ error: "Cliente não encontrado." });
        }
        console.error("Erro ao buscar cliente por ID:", error);
        return response.status(500).json({ error: "Erro interno do servidor" });
    }
});

// Rota PATCH: Inativa um cliente
clienteRouter.patch("/:id/inativar", async (request: Request, response: Response) => {
    try {
    const id = request.params.id as string;
        const clienteInativado = await clienteService.inactivate(id);
        
        return response.json({ 
            message: "Cliente inativado com sucesso!", 
            cliente: clienteInativado 
        });
    } catch (error: any) {
        if (error.message === "CLIENTE_NAO_ENCONTRADO") {
            return response.status(404).json({ error: "Cliente não encontrado." });
        }
        console.error("Erro ao inativar cliente:", error);
        return response.status(500).json({ error: "Erro interno do servidor" });
    }
});