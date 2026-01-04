# Método Farol - Performance Local

Site landing page responsivo para o Método Farol de Conversão, desenvolvido em **HTML, CSS e JavaScript puro** para GitHub Pages.

## 📋 Características

- ✅ Design responsivo e mobile-first
- ✅ Paleta de cores náutica contemporânea (Azul Marinho + Amarelo Quente)
- ✅ Tipografia elegante com Playfair Display + Inter
- ✅ Animações suaves e interativas
- ✅ Simulador de lucro acumulado funcional
- ✅ Otimizado para SEO
- ✅ Zero dependências externas (apenas Google Fonts)
- ✅ Performance otimizada para GitHub Pages

## 🚀 Como Usar

### Opção 1: GitHub Pages (Recomendado)

1. **Fork ou clone este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/farol-website.git
   cd farol-website
   ```

2. **Configure o repositório para GitHub Pages:**
   - Vá para Settings → Pages
   - Selecione "Deploy from a branch"
   - Escolha a branch `main` e pasta `/ (root)`
   - Clique em Save

3. **Seu site estará disponível em:**
   ```
   https://seu-usuario.github.io/farol-website/
   ```

### Opção 2: Servidor Local

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com Live Server (VS Code)
# Instale a extensão Live Server e clique em "Go Live"
```

Acesse `http://localhost:8000` no seu navegador.

## 📁 Estrutura do Projeto

```
farol-website/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos completos
├── js/
│   └── main.js         # Scripts interativos
├── images/
│   ├── logo-farol.webp
│   ├── hero-farol.jpg
│   ├── compass-navigation.jpg
│   └── results-beacon.jpg
└── README.md
```

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Azul Marinho | `#0F3A5F` | Primário, textos |
| Amarelo Quente | `#F4C430` | Destaques, botões secundários |
| Branco | `#FFFFFF` | Fundo, textos claros |
| Cinza Claro | `#F5F5F5` | Fundos secundários |
| Cinza Escuro | `#2C3E50` | Textos principais |

## 🔧 Personalização

### Alterar Números de Resultados

Edite em `index.html`:
```html
<div class="resultado-numero">151</div>
```

### Alterar Link do WhatsApp

Procure por `https://wa.me/5511999999999` e substitua pelo seu número:
```html
<a href="https://wa.me/SEU_NUMERO_AQUI" class="btn btn-primary">
```

### Modificar Cores

Edite `css/styles.css` na seção `:root`:
```css
:root {
    --primary: #0F3A5F;
    --secondary: #F4C430;
    /* ... */
}
```

### Adicionar Novas Seções

1. Adicione o HTML em `index.html`
2. Adicione os estilos em `css/styles.css`
3. Adicione interatividade em `js/main.js` se necessário

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** até 767px

## ⚡ Performance

- Imagens otimizadas (WebP + JPG)
- CSS minificado
- JavaScript otimizado
- Sem frameworks pesados
- Tempo de carregamento < 2s

## 🔍 SEO

- Meta tags completas
- Estrutura semântica HTML5
- Títulos e descrições otimizados
- Schema markup pronto para adicionar

## 🎯 Funcionalidades Interativas

### Simulador de Lucro
- Input de ticket médio
- Cálculo automático de receita potencial
- Animação de resultado

### Animações
- Fade-in ao scroll
- Hover effects nos cards
- Parallax na hero section
- Contadores de números

### Navegação
- Smooth scroll
- Links internos
- Menu responsivo

## 🌐 Deploy em Outros Serviços

### Netlify
1. Conecte seu repositório GitHub
2. Build command: (deixe em branco)
3. Publish directory: `/`

### Vercel
1. Importe o repositório
2. Configuração automática
3. Deploy instantâneo

### Seu Próprio Servidor
```bash
# Copie todos os arquivos para o servidor
scp -r ./* seu-servidor:/var/www/farol-website/
```

## 📝 Licença

Este projeto é de código aberto. Sinta-se livre para usar, modificar e distribuir.

## 💬 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Desenvolvido com ❤️ para o Método Farol**
