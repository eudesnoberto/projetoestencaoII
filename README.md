# Secretaria de Cultura - Moreno - PE

Site institucional da Secretaria de Cultura de Moreno - PE, desenvolvido para divulgar eventos culturais, exposições, apresentações e oficinas da cidade.

## 📚 Informações Acadêmicas

**Projeto de Extensão II - 5º Período**  
**Aluno:** Francieudes Silva Noberto Alves  
**Faculdade:** UNOPAR - Polo Boa Vista  
**Localização:** Recife - PE  
**Disciplina:** Projeto de Extensão II  

---

Este projeto foi desenvolvido como parte das atividades acadêmicas do curso de Análise e Desenvolvimento de Sistemas, com o objetivo de aplicar os conhecimentos adquiridos em desenvolvimento web moderno para criar uma solução real para a comunidade de Moreno - PE.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para interface de usuário
- **Vite** - Build tool moderna e rápida
- **React Router DOM** - Roteamento para SPA
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **React Hook Form** - Gerenciamento de formulários
- **Framer Motion** - Animações (preparado para uso futuro)

## 📋 Funcionalidades

### ✅ Implementadas
- **Página Inicial** - Hero section com destaques e call-to-actions
- **Sistema de Eventos** - Listagem com filtros por categoria e busca
- **Galeria de Fotos** - Lightbox interativo com categorias
- **Notícias** - Sistema de notícias com destaques
- **Página de Contato** - Formulário funcional com validação
- **Design Responsivo** - Otimizado para mobile, tablet e desktop
- **Navegação Intuitiva** - Menu responsivo com indicadores de página ativa

### 🎨 Design
- Interface moderna e limpa
- Cores que representam a cultura pernambucana
- Tipografia Inter para melhor legibilidade
- Gradientes e sombras para profundidade visual
- Animações suaves e transições

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para execução

1. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   cd secretaria-cultura-moreno
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

### Scripts disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx      # Cabeçalho com navegação
│   ├── Footer.jsx      # Rodapé com informações
│   └── Layout.jsx      # Layout principal
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página inicial
│   ├── Events.jsx      # Página de eventos
│   ├── Gallery.jsx     # Galeria de fotos
│   ├── News.jsx        # Página de notícias
│   └── Contact.jsx     # Página de contato
├── data/               # Dados mockados
│   ├── events.js       # Dados dos eventos
│   ├── news.js         # Dados das notícias
│   └── gallery.js      # Dados da galeria
├── hooks/              # Custom hooks (futuro)
├── utils/              # Funções utilitárias (futuro)
└── assets/             # Recursos estáticos
    └── images/         # Imagens do projeto
```

## 🎯 Próximas Implementações

### Funcionalidades Futuras
- [ ] Sistema de autenticação para administradores
- [ ] Painel administrativo para gerenciar eventos e notícias
- [ ] Integração com API real
- [ ] Sistema de inscrições para eventos
- [ ] Calendário interativo
- [ ] Sistema de comentários nas notícias
- [ ] Newsletter funcional
- [ ] Integração com redes sociais
- [ ] PWA (Progressive Web App)
- [ ] Modo escuro

### Melhorias Técnicas
- [ ] Testes unitários e de integração
- [ ] Otimização de performance
- [ ] SEO avançado
- [ ] Acessibilidade (WCAG 2.1)
- [ ] Internacionalização (i18n)

## 🎨 Personalização

### Cores
O projeto utiliza uma paleta de cores que representa a cultura pernambucana:
- Azul: Representa o céu e o mar
- Roxo: Representa a criatividade e arte
- Verde: Representa a natureza local
- Amarelo: Representa o sol e energia

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800, 900

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto para configurações específicas:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Secretaria de Cultura Moreno
```

## 📄 Licença

Este projeto foi desenvolvido para a Secretaria de Cultura de Moreno - PE.

## 👥 Contribuição

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:
- Email: eudes.sna@gmail.com

---

**Desenvolvido com ❤️ para a cultura de Moreno - PE**
