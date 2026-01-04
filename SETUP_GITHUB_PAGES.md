# 🚀 Guia de Setup - GitHub Pages

## Passo 1: Preparar o Repositório

### 1.1 Criar um novo repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `farol-website` (ou qualquer nome que preferir)
3. Descrição: "Site landing page - Método Farol de Conversão"
4. Escolha: **Public** (necessário para GitHub Pages gratuito)
5. Clique em "Create repository"

### 1.2 Clonar o repositório localmente

```bash
git clone https://github.com/SEU_USUARIO/farol-website.git
cd farol-website
```

## Passo 2: Adicionar os Arquivos

Copie todos os arquivos do projeto para o diretório clonado:

```
farol-website/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── logo-farol.webp
│   ├── hero-farol.jpg
│   ├── compass-navigation.jpg
│   └── results-beacon.jpg
├── README.md
├── .gitignore
└── SETUP_GITHUB_PAGES.md
```

## Passo 3: Fazer o Commit Inicial

```bash
# Adicionar todos os arquivos
git add .

# Criar o commit
git commit -m "Initial commit: Método Farol landing page"

# Enviar para o GitHub
git push -u origin main
```

## Passo 4: Configurar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em "Build and deployment":
   - **Source**: Selecione "Deploy from a branch"
   - **Branch**: Selecione `main` e pasta `/ (root)`
5. Clique em **Save**

## Passo 5: Aguardar o Deploy

- GitHub Pages levará alguns minutos para fazer o deploy
- Você verá uma mensagem verde: "Your site is live at https://SEU_USUARIO.github.io/farol-website/"
- Clique no link para visualizar seu site

## ✅ Verificação

Seu site estará disponível em:
```
https://SEU_USUARIO.github.io/farol-website/
```

## 🔧 Atualizações Futuras

Para fazer alterações no site:

```bash
# Fazer alterações nos arquivos localmente

# Adicionar as mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push
```

O GitHub Pages atualizará automaticamente em poucos minutos.

## 📱 Domínio Customizado (Opcional)

Se você tem um domínio próprio:

1. Em **Settings → Pages**
2. Em "Custom domain", insira seu domínio (ex: `farol.com.br`)
3. Clique em **Save**
4. Configure os DNS records do seu domínio:
   - Tipo A: aponte para `185.199.108.153`
   - Ou use CNAME apontando para `SEU_USUARIO.github.io`

## 🚀 Alternativas de Deploy

Se preferir não usar GitHub Pages, você pode fazer deploy em:

### Netlify
1. Vá para [netlify.com](https://netlify.com)
2. Clique em "Connect from Git"
3. Selecione seu repositório GitHub
4. Configuração automática
5. Deploy em 1 clique

### Vercel
1. Vá para [vercel.com](https://vercel.com)
2. Clique em "Import Project"
3. Selecione seu repositório GitHub
4. Deploy automático

### Seu Servidor
```bash
# SSH para seu servidor
ssh usuario@seu-servidor.com

# Criar diretório
mkdir -p /var/www/farol-website

# Fazer upload dos arquivos
scp -r ./* usuario@seu-servidor.com:/var/www/farol-website/
```

## 🔐 Segurança

- ✅ Nenhuma informação sensível é armazenada
- ✅ Sem banco de dados
- ✅ Sem credenciais no código
- ✅ HTTPS automático no GitHub Pages

## 📊 Analytics (Opcional)

Para adicionar Google Analytics:

1. Crie uma conta em [analytics.google.com](https://analytics.google.com)
2. Adicione este código antes de `</head>` em `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Substitua `GA_ID` pelo seu ID do Google Analytics.

## 🎯 Próximos Passos

1. ✅ Personalizar o número do WhatsApp
2. ✅ Adicionar seu nome/informações
3. ✅ Testar em diferentes dispositivos
4. ✅ Compartilhar o link com clientes
5. ✅ Monitorar analytics

## 📞 Suporte

Para dúvidas sobre GitHub Pages:
- [Documentação oficial](https://docs.github.com/en/pages)
- [GitHub Community](https://github.community)

---

**Seu site estará no ar em minutos! 🎉**
