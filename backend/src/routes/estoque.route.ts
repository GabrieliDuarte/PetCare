import { Router, Request, Response } from 'express';
import { EstoqueService } from '../services/estoque.service.js';

const estoqueRoutes = Router();
const estoqueService = new EstoqueService();

estoqueRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const item = await estoqueService.criar(req.body);
    return res.status(201).json(item);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao cadastrar o produto no estoque." });
  }
});

estoqueRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const itens = await estoqueService.listar();
    return res.status(200).json(itens);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar o estoque." });
  }
});

estoqueRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await estoqueService.inativar(id);
    return res.status(200).json({ message: "Produto inativado com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao inativar o produto." });
  }
});

export { estoqueRoutes };