# Fuentes del Portafolio

Esta carpeta contiene las fuentes personalizadas utilizadas en el portafolio.

## Fuentes utilizadas:

### Inter (Google Fonts)
- **Fuente principal**: Inter
- **Peso**: 300, 400, 500, 600, 700
- **Uso**: Texto general, títulos, navegación
- **CDN**: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap

## Fuentes alternativas recomendadas:

### Para títulos:
- **Poppins**: Moderna y legible
- **Montserrat**: Elegante y profesional
- **Roboto**: Limpia y versátil

### Para código:
- **Fira Code**: Con ligaduras para código
- **Source Code Pro**: Monospace profesional
- **JetBrains Mono**: Moderna para desarrolladores

## Instalación de fuentes personalizadas:

Si deseas agregar fuentes personalizadas, colócalas en esta carpeta y actualiza el CSS:

```css
@font-face {
    font-family: 'MiFuente';
    src: url('./assets/fonts/MiFuente.woff2') format('woff2'),
         url('./assets/fonts/MiFuente.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
```

## Optimización:

- Usa `font-display: swap` para mejor rendimiento
- Prefiere formatos WOFF2 y WOFF
- Considera usar Google Fonts para mejor caché
- Limita el número de pesos de fuente para mejor rendimiento
