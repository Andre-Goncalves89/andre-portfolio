# MVP Backlog — André Portfolio

## 🎯 Objetivo do MVP

Construir uma versão pública, profissional e testável do site pessoal de André Gonçalves, com foco em:

- Portfólio de projetos
- Demonstração de conhecimento em QA Engineering
- Integração com boas práticas de desenvolvimento de software
- Base para testes automatizados (Cypress + BDD + Screenplay)
- Estrutura pronta para CI/CD

---

## 🧱 Escopo do MVP

### 🎨 Frontend
- Header
- Hero Section
- Portfolio Section
- About Section
- Contact Section
- Footer

---

### ⚙️ Funcionalidades
- Renderização dinâmica de projetos
- Navegação entre seções
- Formulário de contato
- Troca de idioma (base preparada)

---

### 🧪 Qualidade
- Cenários de teste (BDD)
- Casos de teste
- Testes E2E com Cypress
- Estrutura de testes baseada em Screenplay Pattern

---

### 🚀 Entrega
- Deploy do frontend
- Pipeline básico de CI
- Preparação para CD

---

## 🧠 Critério de sucesso do MVP

- Site acessível publicamente
- Pelo menos 1 projeto bem apresentado (TechNova)
- Formulário funcional
- Estrutura preparada para testes
- Código organizado e versionado corretamente

---

## 📋 Sprint 1 — Foundation do MVP

### Card 1 — Tipar dados dos projetos
**Branch sugerida:** `feature/project-typing`

**Objetivo:**  
Criar tipagem TypeScript para os projetos exibidos no portfólio.

**Definition of Done:**
- Tipo `Project` criado
- `projects.ts` usando tipagem explícita
- `PortfolioSection` sem erro de tipo
- Site rodando normalmente

---

### Card 2 — Criar About Section
**Branch sugerida:** `feature/about-section`

**Objetivo:**  
Criar seção sobre André, com posicionamento profissional como QA Engineer em evolução.

**Definition of Done:**
- Componente `AboutSection` criado
- Seção adicionada na Home
- Texto claro e alinhado ao LinkedIn
- Responsivo no básico

---

### Card 3 — Criar Contact Section
**Branch sugerida:** `feature/contact-section`

**Objetivo:**  
Criar seção visual de contato com CTA para recrutadores/clientes.

**Definition of Done:**
- Componente `ContactSection` criado
- Campos definidos para futuro formulário
- CTA claro
- Estrutura pronta para validação futura

---

### Card 4 — Melhorar Footer
**Branch sugerida:** `feature/footer-links`

**Objetivo:**  
Adicionar links úteis no rodapé.

**Definition of Done:**
- GitHub adicionado
- LinkedIn adicionado
- Email adicionado
- Layout responsivo básico

---

## 🧪 Sprint 2 — Qualidade

### Card 5 — Criar documentação de cenários BDD
**Branch sugerida:** `test/bdd-scenarios`

**Objetivo:**  
Documentar cenários principais do MVP usando Gherkin.

**Definition of Done:**
- Arquivo `.feature` criado
- Cenários de navegação definidos
- Cenário de visualização do TechNova definido
- Cenário de contato definido

---

### Card 6 — Configurar Cypress
**Branch sugerida:** `test/cypress-setup`

**Objetivo:**  
Adicionar Cypress ao projeto e preparar base de testes E2E.

**Definition of Done:**
- Cypress instalado
- Script de teste criado
- Estrutura inicial criada
- Primeiro teste smoke funcionando

---

### Card 7 — Criar estrutura Screenplay
**Branch sugerida:** `test/screenplay-structure`

**Objetivo:**  
Organizar os testes E2E com padrão inspirado em Screenplay.

**Definition of Done:**
- Pastas de actors/tasks/questions criadas
- Teste do fluxo de portfólio usando estrutura inicial
- Seletores definidos com `data-cy`

---

## 🚀 Sprint 3 — Entrega

### Card 8 — Configurar CI
**Branch sugerida:** `ci/github-actions`

**Objetivo:**  
Criar pipeline inicial no GitHub Actions.

**Definition of Done:**
- Workflow criado
- Lint executando no CI
- Build executando no CI
- Pipeline passando no PR

---

### Card 9 — Deploy do frontend
**Branch sugerida:** `deploy/frontend-vercel`

**Objetivo:**  
Publicar o frontend na Vercel.

**Definition of Done:**
- Deploy público criado
- URL adicionada ao README
- Link do TechNova revisado
- Site acessível publicamente