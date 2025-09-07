# 📸 Instrucciones para Agregar tu Foto

## 📁 Pasos para agregar tu foto de perfil:

### 1. **Copia tu foto**
- Tu foto actual está en: `C:\Users\Luisp\Downloads\photo_2025-09-07_13-40-30.jpg`
- Cópiala a la carpeta: `assets/images/`
- Renómbrala como: `profile.jpg`

### 2. **Comando para copiar (opcional)**
```bash
# Desde la carpeta del portafolio, ejecuta:
copy "C:\Users\Luisp\Downloads\photo_2025-09-07_13-40-30.jpg" "assets\images\profile.jpg"
```

### 3. **Actualizar la ruta en el HTML**
Una vez que copies la foto, actualiza el archivo `index.html`:

**Cambiar esta línea:**
```html
<img src="C:\Users\Luisp\Downloads\photo_2025-09-07_13-40-30.jpg" alt="Luis Rafael Prado Quitero" id="profile-img">
```

**Por esta:**
```html
<img src="assets/images/profile.jpg" alt="Luis Rafael Prado Quitero" id="profile-img">
```

### 4. **Especificaciones recomendadas para la foto:**
- **Formato**: JPG o PNG
- **Tamaño**: Mínimo 400x400px
- **Peso**: Máximo 500KB
- **Estilo**: Foto profesional o semi-profesional
- **Fondo**: Preferiblemente neutro o con poco contraste

### 5. **Optimización (opcional)**
Si quieres optimizar la foto para web:
- Usa herramientas como [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
- Redimensiona a 400x400px si es necesario
- Comprime para reducir el tamaño del archivo

## ✅ **Resultado esperado:**
Una vez completados estos pasos, tu foto aparecerá correctamente en:
- La sección Hero (página principal)
- La tarjeta de perfil
- Todas las referencias de imagen en el portafolio

---

**Nota**: Actualmente el portafolio está configurado para usar la ruta absoluta de tu foto, pero es mejor usar rutas relativas para que funcione correctamente cuando publiques el portafolio en GitHub Pages o cualquier servidor web.
