import { Router, Request, Response } from 'express';
import { ParceiroService } from '../services/parceiros.service.js';

const parceirosRoutes = Router();
const parceiroService = new ParceiroService();

parceirosRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const parceiro = await parceiroService.criar(req.body);
    return res.status(201).json(parceiro);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao cadastrar o parceiro." });
  }
});

parceirosRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const parceiros = await parceiroService.listar();
    return res.status(200).json(parceiros);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar os parceiros." });
  }
});

parceirosRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await parceiroService.inativar(id);
    return res.status(200).json({ message: "Parceiro inativado com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao inativar o parceiro." });
  }
});

export { parceirosRoutes };