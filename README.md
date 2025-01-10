# PrismaAPI

Uma API simples para aprender os conceitos de Node.js com Typescript e framework Nest. Permite criar, editar e excluir users e posts.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript.
- **Nest.js:** Framework web para Node.js.
- **PostGreSQL:** Banco de dados SQL.
- **Prisma:** Mapeamento objeto-relacional.
- **class-transformer:** Biblioteca para transformar objetos, classes e seus atributos.
- **class-validator:** Biblioteca para validar os dados das requisições.
- **Swagger-OpenAPI:** Biblioteca utilizada para documentar a API, documentação disponível na rota /api.

## Como usar a API

Para utilizar esta API, você precisará de um cliente HTTP como Postman ou Insomnia para fazer as requisições.

## Endpoints

Uma documentação detalhada consta na própria API na rota:

```sh
http://localhost:3000/api
```

## Executando o projeto

Faça um clone deste repositório e instale no seu ambiente de desenvolvimento usando o seguinte comando no seu terminal (escolha um diretório apropriado):

```shell
git clone git@github.com:guilhermemon18/prisma-api.git
```

Após clonar o conteúdo do repositório, acesse o diretório e execute os comandos abaixo:

```shell
cd nestjs-app-prisma

chmod +x .docker/entrypoint.sh

docker-compose up --build
```

Após a execução do comando acima o servidor estará em execução no endereço `http://localhost:3000`.
