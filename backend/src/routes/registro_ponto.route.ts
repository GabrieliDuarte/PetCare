import { Router, Request, Response } from 'express';
import { RegistroPontoService } from '../services/registro_ponto.service.js';

const registroPontoRoutes = Router();
const registroPontoService = new RegistroPontoService();

registroPontoRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const registo = await registroPontoService.criar(req.body);
    return res.status(201).json(registo);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao registar o ponto do funcionário." });
  }
});

registroPontoRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const registos = await registroPontoService.listar();
    return res.status(200).json(registos);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar os registos de ponto." });
  }
});

registroPontoRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await registroPontoService.inativar(id);
    return res.status(200).json({ message: "Registo de ponto inativado com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao inativar o registo de ponto." });
  }
});

export { registroPontoRoutes };