# Tarefa_interface_web_Stackx

Projeto – Consumo da API RandomUser 

Objetivo: 
Criar uma interface web que consuma dados da API pública RandomUser, trate as informações e envie para um banco de dados próprio utilizando Node.js, Express e Prisma ORM. 
 

Funcionalidades 

- Consumo da API https://randomuser.me/api/ 
- Tratamento dos dados (nome, email, data de nascimento e idade) 
- Envio dos dados para backend próprio 
- Persistência dos dados em banco SQLite usando Prisma 
 

Tecnologias Utilizadas 

- HTML5 
- JavaScript 
- Node.js 
- Express 
- Prisma ORM 
- SQLite 
- Postman 
 

Passo a passo para executar o projeto 

1. Baixar ou clonar o projeto. 
2. Abrir a pasta Backend no terminal. 
3. Executar o comando: npm install 
4. Executar o comando: npx prisma generate 
5. Executar o comando: npx prisma migrate dev 
6. Executar o comando: npm run dev 
7. Abrir o arquivo index.html no navegador. 
 

Banco de Dados 

Os dados são armazenados em um banco SQLite localizado em: 
Backend/prisma/dev.db 
O arquivo pode ser visualizado utilizando o DB Browser for SQLite. 
 

Testes 

As rotas foram testadas utilizando o Postman, através da rota: 
POST http://localhost:3000/usuarios 
 

Pré-requisitos (O que precisa estar instalado) 

Antes de executar o projeto, é necessário ter instalado no computador: 
 
• Node.js (versão LTS recomendada) 
  Download: https://nodejs.org 
 
• NPM (instalado automaticamente junto com o Node.js) 
 
• DB Browser for SQLite (opcional, apenas para visualizar o banco de dados) 
  Download: https://sqlitebrowser.org 
 
• Navegador de internet (Google Chrome, Edge ou similar) 
 

Como obter o projeto 

O projeto pode ser obtido de duas formas: 
 
1. Clonando o repositório Git (se aplicável) 
2. Baixando o arquivo ZIP e extraindo em uma pasta local 
 
Após obter o projeto, abra a pasta principal no VS Code. 

 Estrutura do Projeto 

O projeto está organizado da seguinte forma: 
 
Projeto_interface_web - Tarefa 1 
├── Backend 
│   ├server.js 
│   ├ package.json 
│   ├── prisma 
│   │   ├schema.prisma 
│   │   └dev.db 
│   └── node_modules 
Frontend 
    ├── index.html 
    └── script.js 
 

Passo a passo para executar o Backend 

Siga rigorosamente os passos abaixo: 
 
1. Abra o terminal (PowerShell ou Terminal do VS Code). 
 
2. Navegue até a pasta Backend do projeto: 
   cd Backend 
 
3. Instale todas as dependências do projeto: 
   npm install 
 
4. Gere o Prisma Client: 
   npx prisma generate 
 
5. Crie o banco de dados e as tabelas (migração): 
   npx prisma migrate dev 
 
6. Inicie o servidor backend: 
   npm run dev 
 
7. Após esse comando, o terminal exibirá a mensagem: 
   'Servidor rodando na porta 3000' 
 

Executando o Frontend 

Com o backend em execução: 
 
1. Acesse a pasta Frontend. 
2. Abra o arquivo index.html em um navegador. 
3. Clique no botão 'Buscar Usuário Aleatório'. 
4. Os dados do usuário serão exibidos na tela e enviados automaticamente para o backend. 

Banco de Dados 

Os dados são armazenados em um banco de dados SQLite localizado no arquivo: 
 
Backend/prisma/dev.db 
 
Para visualizar os dados: 
1. Abra o DB Browser for SQLite. 
2. Clique em 'Open Database'. 
3. Selecione o arquivo dev.db. 
4. Acesse a aba 'Browse Data' e selecione a tabela 'User'. 

Testes com Postman 

A API pode ser testada utilizando o Postman: 
 
• Método: POST 
• URL: http://localhost:3000/usuarios 
• Body (JSON): 
 
{ 
  "nome": "Alvestech", 
  "email": "Alves.tech222@email.com", 
  "dataNascimento": "1990-05-12", 
  "idade": 32 
} 
 
O retorno confirma que os dados foram salvos com sucesso no banco. 

 Tecnologias Utilizadas 

• HTML5 
• JavaScript 
• Node.js 
• Express 
• Prisma ORM 
• SQLite 
• Postman 
