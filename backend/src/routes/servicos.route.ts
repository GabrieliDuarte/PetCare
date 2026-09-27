import { Router, Request, Response } from 'express';
import { ServicoService } from '../services/servicos.service.js';

const servicosRoutes = Router();
const servicoService = new ServicoService();

servicosRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const servico = await servicoService.criar(req.body);
    return res.status(201).json(servico);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao cadastrar o serviço." });
  }
});

servicosRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const servicos = await servicoService.listar();
    return res.status(200).json(servicos);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar serviços." });
  }
});

servicosRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await servicoService.inativar(id);
    return res.status(200).json({ message: "Serviço inativado com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao inativar o serviço." });
  }
});

export { servicosRoutes };