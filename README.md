# 📌 Visualizador de Repositórios do GitHub

Um projeto em **React** que consome a **API pública do GitHub** para exibir informações de qualquer usuário pesquisado, como avatar, nome e lista de repositórios públicos.

---

## 🚀 Funcionalidades

- ✅ Buscar usuário do GitHub a partir de um formulário.  
- ✅ Exibir foto de perfil (avatar) e login do usuário.  
- ✅ Listar todos os repositórios públicos do usuário.  
- ✅ Mostrar detalhes básicos de cada repositório:  
  - Nome  
  - Linguagem principal  
  - Link para o repositório no GitHub  
- ✅ Mensagens de erro caso o usuário não exista ou não possua repositórios.  
- ✅ Botão para pesquisar outro usuário sem recarregar a página.  

---

## 📚 O que aprendi nesse projeto

Durante o desenvolvimento, pratiquei e aprendi:

### ⚛️ React
- **Componentes funcionais**: separação em `Formulario`, `Perfil` e `ReposList`.  
- **Hooks**:
  - `useState` → controle do estado (nome do usuário, lista de repositórios, carregamento e erros).  
  - `useEffect` → execução da requisição sempre que o usuário pesquisado muda.  
- **Props**: comunicação entre componentes, passando funções e dados.  
- **Renderização condicional**: exibição dinâmica de formulário, carregamento, erros ou lista de repositórios.

### 🌐 Integração com API
- Consumo da **API pública do GitHub** (`https://api.github.com/users/{usuario}/repos`).  
- Tratamento de respostas inválidas e erros (`res.ok`, `.catch`).  

### 🎨 Estilização
- Uso de **CSS Modules** para estilos isolados e organizados.  
- Responsividade e ajustes visuais básicos.  

### 💡 Boas práticas
- Validação para evitar buscas com input vazio.  
- Limpeza automática do campo de pesquisa após envio.  
- Feedback claro para o usuário em todos os estados (carregando, erro, vazio).  

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/) (ambiente de desenvolvimento)  
- [CSS Modules](https://github.com/css-modules/css-modules)  
- [GitHub API](https://docs.github.com/pt/rest)  

