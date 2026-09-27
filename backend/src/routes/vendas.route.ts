import { Router, Request, Response } from 'express';
import { VendaService } from '../services/vendas.service.js';

const vendasRoutes = Router();
const vendaService = new VendaService();

vendasRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const venda = await vendaService.criar(req.body);
    return res.status(201).json(venda);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao registar a venda." });
  }
});

vendasRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const vendas = await vendaService.listar();
    return res.status(200).json(vendas);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar as vendas." });
  }
});

vendasRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await vendaService.inativar(id);
    return res.status(200).json({ message: "Venda cancelada/inativada com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao inativar a venda." });
  }
});

export { vendasRoutes };