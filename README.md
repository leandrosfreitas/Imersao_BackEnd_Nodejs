# Projeto: Gerador de Descrição de Imagens com IA - Gemini API

Este projeto é uma aplicação backend em Node.js que utiliza a API Gemini da Google Generative AI para gerar descrições automáticas (alt-text) para imagens enviadas pelo usuário. 

## Funcionalidades principais

- Recebe imagens via upload utilizando `multer` em rotas Express.js.
- Conecta-se a um banco MongoDB para armazenar posts com as imagens e suas descrições.
- Gera descrições em português brasileiro usando o modelo generativo "gemini-1.5-flash" da API Google Generative AI.
- Atualiza os posts com as descrições geradas automaticamente.
- Suporta operações CRUD básicas para posts (listar, criar, atualizar).
- Middleware CORS configurado para comunicação segura com frontend local.

## Tecnologias utilizadas

- Node.js com Express.js para a API REST
- MongoDB para persistência dos dados
- Google Generative AI (Gemini API) para geração de texto a partir da imagem
- Multer para upload de arquivos
- dotenv para gerenciamento de variáveis de ambiente

## Estrutura do código

- `services/gemini_service.js`: Serviço que se comunica com a API Gemini para gerar descrições a partir de imagens.
- `controllers/posts_controllers.js`: Lógica das rotas para manipulação dos posts.
- `models/posts_model.js`: Acesso e manipulação do banco MongoDB.
- `routes/index.js`: Definição das rotas e middlewares da aplicação.

## Como usar

1. Configurar as variáveis de ambiente (`GEMINI_API_KEY`, `STRING_CONEXAO`).
2. Rodar o servidor Node.js.
3. Enviar imagens via endpoint `/upload`.
4. O sistema gera e atualiza automaticamente a descrição da imagem usando IA.

---

Este projeto demonstra a integração entre APIs de IA generativa e backend para automatizar a geração de conteúdo acessível e descritivo para imagens.
