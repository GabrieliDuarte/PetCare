import { Router, Request, Response } from 'express';
import { FuncionarioService } from '../services/funcionarios.service.js';

const funcionariosRoutes = Router();
const funcionarioService = new FuncionarioService();

funcionariosRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const funcionario = await funcionarioService.criar(req.body);
    return res.status(201).json(funcionario);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao cadastrar o funcionário." });
  }
});

funcionariosRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const funcionarios = await funcionarioService.listar();
    return res.status(200).json(funcionarios);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar funcionários." });
  }
});

funcionariosRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await funcionarioService.inativar(id);
    return res.status(200).json({ message: "Funcionário inativado com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao excluir o funcionário." });
  }
});

export { funcionariosRoutes };