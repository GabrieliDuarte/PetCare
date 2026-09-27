import { Router, Request, Response } from 'express';
import { CargoFuncService } from '../services/cargo_func.service.js';

const cargoFuncRoutes = Router();
const cargoFuncService = new CargoFuncService();

cargoFuncRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const cargo = await cargoFuncService.criar(req.body);
    return res.status(201).json(cargo);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao cadastrar o cargo." });
  }
});

cargoFuncRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const cargos = await cargoFuncService.listar();
    return res.status(200).json(cargos);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar cargos." });
  }
});

cargoFuncRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await cargoFuncService.inativar(id);
    return res.status(200).json({ message: "Cargo inativado com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao inativar o cargo." });
  }
});

export { cargoFuncRoutes };