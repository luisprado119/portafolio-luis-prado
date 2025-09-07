# 🚀 Portafolio de Luis Pérez

Un portafolio moderno y responsive desarrollado con HTML5, CSS3 y JavaScript vanilla, diseñado para mostrar proyectos y habilidades de desarrollo.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia y profesional con gradientes y animaciones suaves
- **📱 Responsive**: Completamente adaptable a todos los dispositivos
- **⚡ Rápido**: Optimizado para rendimiento y carga rápida
- **🎭 Animaciones**: Efectos visuales atractivos y transiciones fluidas
- **♿ Accesible**: Cumple con estándares de accesibilidad web
- **🔍 SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y moderna
- **CSS3**: Estilos avanzados con variables CSS y Flexbox/Grid
- **JavaScript ES6+**: Funcionalidad interactiva y animaciones
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografía Inter para mejor legibilidad

## 📁 Estructura del Proyecto

```
portafolio-luis-git-/
├── index.html              # Página principal
├── css/
│   ├── styles.css          # Estilos principales
│   └── animations.css      # Animaciones personalizadas
├── js/
│   ├── main.js            # Funcionalidad principal
│   └── animations.js      # Sistema de animaciones
├── guias/
│   ├── git-completo.html  # Guía completa de Git
│   ├── git-practica.html  # Práctica de clonación
│   ├── git-errores.html   # Errores comunes en Git
│   └── README.md          # Documentación de guías
├── assets/
│   ├── images/            # Imágenes del portafolio
│   ├── fonts/             # Fuentes personalizadas
│   └── icons/             # Iconos y favicons
├── package.json           # Configuración del proyecto
└── README.md             # Documentación
```

## 🚀 Instalación y Uso

### Opción 1: Servidor Local Simple
```bash
# Clonar el repositorio
git clone https://github.com/luisperez/portafolio.git
cd portafolio

# Abrir directamente en el navegador
open index.html
```

### Opción 2: Con Live Server (Recomendado)
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# O para desarrollo con recarga automática
npm run dev
```

### Opción 3: Con Python (si tienes Python instalado)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

## 🎨 Personalización

### 1. Información Personal
Edita el archivo `index.html` para cambiar:
- Nombre y título profesional
- Información de contacto
- Descripción personal
- Proyectos y habilidades

### 2. Colores y Estilos
Modifica las variables CSS en `css/styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Color principal */
    --secondary-color: #f59e0b;  /* Color secundario */
    --accent-color: #10b981;     /* Color de acento */
    /* ... más variables */
}
```

### 3. Imágenes
Reemplaza las imágenes en `assets/images/`:
- `profile.jpg` - Tu foto de perfil
- `about.jpg` - Imagen para la sección "Sobre Mí"
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Imágenes de proyectos

### 4. Proyectos
Actualiza la sección de proyectos en `index.html`:
```html
<div class="project-card">
    <div class="project-image">
        <img src="assets/images/tu-proyecto.jpg" alt="Tu Proyecto">
        <div class="project-overlay">
            <a href="https://tu-proyecto.com" class="project-link">
                <i class="fas fa-external-link-alt"></i>
            </a>
            <a href="https://github.com/tu-usuario/tu-proyecto" class="project-link">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
    <div class="project-content">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción del proyecto...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
        </div>
    </div>
</div>
```

## 📱 Secciones del Portafolio

1. **🏠 Inicio**: Presentación principal con efecto hero
2. **👨‍💻 Sobre Mí**: Información personal y estadísticas
3. **🛠️ Habilidades**: Tecnologías y herramientas dominadas
4. **📚 Guías**: Tutoriales interactivos de Git y desarrollo
5. **💼 Servicios**: Soluciones tecnológicas ofrecidas
6. **📱 Aplicaciones**: Proyectos prácticos y aplicaciones funcionales
7. **💼 Proyectos**: Sistemas empresariales y proyectos destacados
8. **📞 Contacto**: Formulario de contacto y información

## 🎭 Animaciones Incluidas

- **Fade In**: Aparición suave de elementos
- **Slide In**: Deslizamiento desde diferentes direcciones
- **Scale In**: Efecto de escala
- **Bounce In**: Efecto de rebote
- **Typewriter**: Efecto de máquina de escribir
- **Particles**: Sistema de partículas flotantes
- **Parallax**: Efecto parallax en scroll
- **Hover Effects**: Efectos al pasar el mouse

## 🔧 Scripts Disponibles

```bash
npm start          # Iniciar servidor de desarrollo
npm run dev        # Desarrollo con recarga automática
npm run build      # Construir versión optimizada
npm run minify-css # Minificar archivos CSS
npm run minify-js  # Minificar archivos JavaScript
npm run optimize-images # Optimizar imágenes
npm run lighthouse # Análisis de rendimiento
```

## 📊 Optimización y Rendimiento

- **Lazy Loading**: Carga perezosa de imágenes
- **CSS Minificado**: Estilos optimizados
- **JavaScript Minificado**: Código comprimido
- **Imágenes Optimizadas**: Compresión automática
- **Caché del Navegador**: Headers de caché configurados
- **CDN**: Uso de CDNs para librerías externas

## 🌐 Despliegue

### GitHub Pages
1. Sube tu código a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará disponible en `https://tu-usuario.github.io/tu-repositorio`

### Netlify
1. Conecta tu repositorio de GitHub
2. Configura el build command: `npm run build`
3. Configura el publish directory: `.`
4. Despliega automáticamente

### Vercel
1. Importa tu proyecto desde GitHub
2. Configura automáticamente
3. Despliega con un clic

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Luis Pérez**
- 📧 Email: luis.perez@email.com
- 💼 LinkedIn: [linkedin.com/in/luisperez](https://linkedin.com/in/luisperez)
- 🐙 GitHub: [github.com/luisperez](https://github.com/luisperez)
- 🌐 Website: [luisperez.dev](https://luisperez.dev)

## 🙏 Agradecimientos

- [Font Awesome](https://fontawesome.com/) por los iconos
- [Google Fonts](https://fonts.google.com/) por la tipografía Inter
- [Unsplash](https://unsplash.com/) por las imágenes de placeholder
- Comunidad de desarrolladores por la inspiración

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
