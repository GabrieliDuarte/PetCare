
# 🐾 PetCare API 

## 💻 Sobre o projeto
Esta é a API de gerenciamento de clientes desenvolvida em Node.js com TypeScript e PostgreSQL. O sistema permite listar, cadastrar, buscar dados detalhados de um cliente específico e realizar a inativação (soft delete) de cadastros.

## 🛠️ Tecnologias Utilizadas
- **Node.js** com **Express** (Criação do servidor e rotas)
- **TypeScript** (Tipagem estática para maior segurança do código)
- **PostgreSQL** & **node-postgres (pg)** (Banco de dados relacional)
- **React** (Frontend / Interface do usuário)

---

## ⚙️ Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) (Versão 18 ou superior)
- Um banco de dados [PostgreSQL](https://www.postgresql.org/) rodando localmente.

## 🚀 Como executar o projeto

### 1. Clonando o repositório
```bash
git clone [https://github.com/GabrieliDuarte/PetCare.git](https://github.com/GabrieliDuarte/PetCare.git)
git clone https://github.com/GabrieliDuarte/PetCare.git

cd PetCare

## Instalação das Dependências

npm install
# Banco de dados
npm i pg
npm install --save-dev @types/pg

# Tipagens e Typescript global
npm install -g typescript
npm install -D @types/node

# Framework e Variáveis de ambiente
npm install express dotenv
npm install -D @types/express

# Frontend (React)
npm install react react-dom
npm install -D @types/react @types/react-dom

##
Crie um arquivo .env na raiz do projeto e configure suas credenciais do PostgreSQL:
PGUSER=seu_usuario
PGHOST=localhost
PGPASSWORD=sua_senha
PGDATABASE=nome_do_banco
PGPORT=5432

# Inicie o servidor de desenvolvimento
npm run dev

