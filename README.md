# 🚀 Projeto Fullstack Profissional — Laravel + React + TypeScript + Docker + Postgres

Este projeto implementa uma **arquitetura fullstack moderna e escalável**, utilizando **Docker** para orquestração e integração perfeita entre **Laravel (Backend)** e **React (Frontend)**.  
O objetivo é demonstrar um setup de ambiente produtivo, performático e com separação clara de responsabilidades — refletindo o padrão de aplicações SPA profissionais.

---

## 💻 Tecnologias Utilizadas

### **Frontend — React + TypeScript + Vite**
- **Framework/Language:** React 18 + TypeScript → código escalável, seguro e tipado.  
- **Tooling:** Vite 5+ → builds rápidos, Hot Reload imediato e desenvolvimento otimizado.  
- **Integração:** Proxy configurado em `vite.config.ts` para redirecionar chamadas `/api` diretamente ao backend Laravel.

---

### **Backend — Laravel 11 (PHP 8.2+)**
- **Framework:** Laravel 11 (PHP-FPM).  
- **Autenticação:** Laravel Sanctum *(próxima etapa)* para autenticação SPA via cookies/sessão.  
- **Performance:** Docker otimizado com **PHP OpCache**, solucionando lentidão de I/O em Windows/macOS.  
- **API:** Estruturada para comunicação eficiente com o frontend via JSON.

---

### **Infraestrutura — Docker Compose**
- **Banco de Dados:** PostgreSQL 14 com volume persistente (garantia de integridade de dados).  
- **Serviço Web:** Nginx como proxy reverso, roteando requisições para o PHP-FPM.  
- **Contêineres Otimizados:** Imagens baseadas em **Alpine**, com nomes únicos e sem conflitos.  
- **Ambiente de Desenvolvimento:** Suporte a Hot Reload real via `CHOKIDAR_USEPOLLING`.

---

## 🧩 Estrutura dos Serviços

| Serviço       | Descrição                                  | Porta Local |
|----------------|---------------------------------------------|-------------|
| **nginx**      | Proxy reverso para React + Laravel          | 80          |
| **app**        | Aplicação Laravel (PHP-FPM)                 | 9000        |
| **frontend**   | Aplicação React (Vite Dev Server)           | 5173        |
| **db**         | Banco PostgreSQL                            | 5432        |

---

## ⚙️ Boas Práticas Demonstradas

| Área | Conceito |
|------|-----------|
| **Setup de Dev** | Uso de `docker-compose.yml` para orquestração de múltiplos serviços e **HEALTHCHECK**. |
| **Compatibilidade** | Resolução de conflitos entre **Node 18/20** e **Vite 5+**. |
| **Produtividade** | Hot Reload garantido via `CHOKIDAR_USEPOLLING`. |
| **Versionamento** | `.gitignore` centralizado e preparado para **Monorepos**, evitando commits indevidos. |
| **Segurança** | Estrutura de **CORS + Sanctum SPA Mode** para comunicação segura entre backend e frontend. |

---

## 🧠 Aprendizados e Benefícios

- Entendimento de **arquitetura fullstack real** com separação total entre frontend e backend.  
- Uso eficiente de **containers** e redes Docker.  
- **Ambiente padronizado** entre desenvolvedores, sem dependências locais.  
- Base sólida para **autenticação JWT/Sanctum**, deploys CI/CD e escalabilidade futura.

---

## 📦 Próximos Passos

- [ ] Implementar autenticação com **Laravel Sanctum (SPA Mode)**.  
- [ ] Adicionar **rotas privadas** e **persistência de sessão** no React.  
- [ ] Configurar **CI/CD** e pipeline de build automatizado.  
- [ ] Deploy automatizado (Render, Railway ou VPS).  

---
