# ☕ CoffeeDelivery - Sistema de Pedidos com Prisma e NestJS

Este projeto é um sistema de pedidos de cafés modelado com **NestJS**, **Prisma ORM** e **PostgreSQL**.

## 📦 Funcionalidades

- Cadastro de cafés com nome, tipo, descrição, tags e preço.
- Registro de clientes com nome, CPF, e-mail e telefone.
- Criação de pedidos com vários cafés e cálculo de total.
- Relacionamento entre cafés e pedidos via `ItemPedido`.
- Controle de entregas com status e data prevista.

## 🧱 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Insomnia/Postman](https://www.postman.com/) para testar rotas

## 🚀 Como rodar localmente

### 1. Clone o projeto

```bash
git clone https://github.com/renato123b/CoffeDelivery.git
cd CoffeDelivery
