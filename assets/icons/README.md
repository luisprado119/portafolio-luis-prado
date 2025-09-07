# Iconos del Portafolio

Esta carpeta contiene los iconos utilizados en el portafolio.

## Iconos utilizados:

### Font Awesome (CDN)
- **CDN**: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css
- **Iconos principales**:
  - `fab fa-github` - GitHub
  - `fab fa-linkedin` - LinkedIn
  - `fab fa-twitter` - Twitter
  - `fab fa-instagram` - Instagram
  - `fab fa-html5` - HTML5
  - `fab fa-css3-alt` - CSS3
  - `fab fa-js-square` - JavaScript
  - `fab fa-react` - React
  - `fab fa-vue` - Vue.js
  - `fab fa-node-js` - Node.js
  - `fab fa-python` - Python
  - `fab fa-git-alt` - Git
  - `fab fa-docker` - Docker
  - `fab fa-aws` - AWS
  - `fas fa-envelope` - Email
  - `fas fa-phone` - Teléfono
  - `fas fa-map-marker-alt` - Ubicación
  - `fas fa-external-link-alt` - Enlace externo
  - `fas fa-database` - Base de datos
  - `fas fa-server` - Servidor
  - `fas fa-code` - Código

## Iconos personalizados:

Si necesitas iconos personalizados, puedes:

1. **Crear SVGs personalizados**:
   ```html
   <svg class="custom-icon" viewBox="0 0 24 24">
     <path d="..."/>
   </svg>
   ```

2. **Usar iconos de otras librerías**:
   - **Feather Icons**: https://feathericons.com/
   - **Heroicons**: https://heroicons.com/
   - **Lucide**: https://lucide.dev/

3. **Generar favicon**:
   - Usar herramientas como https://favicon.io/
   - Crear múltiples tamaños: 16x16, 32x32, 192x192, 512x512

## Estructura recomendada:

```
assets/icons/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── custom-icons/
    ├── logo.svg
    └── brand-icon.svg
```

## Optimización:

- Usa SVGs para iconos escalables
- Optimiza PNGs con herramientas como TinyPNG
- Considera usar sprites para múltiples iconos pequeños
- Implementa lazy loading para iconos no críticos
