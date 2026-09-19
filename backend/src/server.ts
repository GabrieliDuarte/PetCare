import express, { type Request, type Response } from "express";
import { randomUUID } from "node:crypto";
import { clienteRouter } from "./routes/cliente.route.js";

const app = express(); //Cria a aplicação (o servidor web em si) 
const port = 3000; //e define em qual "porta" do seu computador ela vai rodar

// Middleware(segurança) para a API entender requisições em formato JSON
app.use(express.json());

//  Conectando o roteador de clientes
app.use("/cliente", clienteRouter);

// Rota de Health Check (para ver se o servidor não caiu)
app.get("/health", (_request: Request, response: Response) => {
    return response.json({
        status: "ok",
    });
});

interface CreateUserBody {
    name: string;
}

app.post("/users", (
    request: Request<object, object, CreateUserBody>,
    response: Response,
) => {
    const name = request.body.name?.trim();

    if (!name) {
        return response.status(400).json({
            error: "Name is required",
        });
    }

    return response.status(201).json({
        id: randomUUID(),
        name,
    });
});

// Inicialização do servidor
app.listen(port, () => {
    console.log(` API running at http://localhost:${port}`);
});