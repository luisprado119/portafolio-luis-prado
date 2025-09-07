# 🚀 Comandos para Subir el Portafolio a GitHub

## 📋 Pasos para subir tu portafolio a GitHub

### 1. **Inicializar el repositorio Git (si no está inicializado)**
```bash
# Navegar a la carpeta del portafolio
cd "C:\Users\Luisp\Desktop\portafolio-luis-git-"

# Inicializar Git (si no está inicializado)
git init
```

### 2. **Configurar Git (si no está configurado)**
```bash
# Configurar tu nombre de usuario
git config --global user.name "Luis Rafael Prado Quitero"

# Configurar tu email
git config --global user.email "luisprado119@gmail.com"
```

### 3. **Agregar todos los archivos al staging area**
```bash
# Agregar todos los archivos
git add .

# O agregar archivos específicos
git add index.html
git add css/
git add js/
git add guias/
git add assets/
git add README.md
git add package.json
git add LICENSE
```

### 4. **Hacer el primer commit**
```bash
# Crear el commit inicial
git commit -m "feat: portafolio completo con guías, servicios y aplicaciones prácticas

- Agregada sección de guías interactivas de Git
- Implementada sección de servicios profesionales
- Creada sección de aplicaciones prácticas
- Actualizados proyectos con sistemas empresariales
- Cambiados colores a tema azul moderno
- Integrados enlaces de LinkedIn y GitHub
- Agregadas imágenes placeholder para proyectos"
```

### 5. **Crear repositorio en GitHub (desde la web)**
1. Ve a [GitHub.com](https://github.com)
2. Haz clic en el botón **"New"** o **"+"** → **"New repository"**
3. Nombre del repositorio: `portafolio-luis-prado` (o el que prefieras)
4. Descripción: `Portafolio profesional de Luis Rafael Prado Quitero - Desarrollador Full Stack & Blockchain Developer`
5. Marca como **"Public"** (para GitHub Pages)
6. **NO** marques "Add a README file" (ya tienes uno)
7. Haz clic en **"Create repository"**

### 6. **Conectar el repositorio local con GitHub**
```bash
# Agregar el repositorio remoto (reemplaza 'tu-usuario' con tu nombre de usuario)
git remote add origin https://github.com/luisprado119/portafolio-luis-prado.git

# Verificar que se agregó correctamente
git remote -v
```

### 7. **Subir el código a GitHub**
```bash
# Subir la rama main al repositorio remoto
git push -u origin main
```

### 8. **Activar GitHub Pages (para publicar el sitio)**
1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (pestaña superior)
3. Desplázate hacia abajo hasta **"Pages"** (en el menú lateral izquierdo)
4. En **"Source"**, selecciona **"Deploy from a branch"**
5. En **"Branch"**, selecciona **"main"** y **"/ (root)"**
6. Haz clic en **"Save"**
7. Tu sitio estará disponible en: `https://luisprado119.github.io/portafolio-luis-prado/`

## 🔄 **Comandos para futuras actualizaciones**

### **Cuando hagas cambios en el futuro:**
```bash
# 1. Ver qué archivos cambiaron
git status

# 2. Agregar los cambios
git add .

# 3. Hacer commit con mensaje descriptivo
git commit -m "feat: descripción de los cambios realizados"

# 4. Subir los cambios
git push origin main
```

## 🛠️ **Comandos útiles adicionales**

### **Ver el historial de commits:**
```bash
git log --oneline
```

### **Ver el estado actual:**
```bash
git status
```

### **Ver las ramas:**
```bash
git branch
```

### **Crear una nueva rama para una funcionalidad:**
```bash
git checkout -b nueva-funcionalidad
git add .
git commit -m "feat: nueva funcionalidad"
git push -u origin nueva-funcionalidad
```

## ⚠️ **Posibles problemas y soluciones**

### **Si aparece error de autenticación:**
```bash
# Usar token de acceso personal en lugar de contraseña
# Ve a GitHub → Settings → Developer settings → Personal access tokens
# Crea un nuevo token con permisos de "repo"
```

### **Si el repositorio ya existe en GitHub:**
```bash
# Hacer pull primero para sincronizar
git pull origin main --allow-unrelated-histories
git push origin main
```

### **Si quieres cambiar la URL del repositorio:**
```bash
# Ver la URL actual
git remote -v

# Cambiar la URL
git remote set-url origin https://github.com/luisprado119/nuevo-nombre.git
```

## 📝 **Checklist antes de subir**

- [ ] ✅ Todos los archivos están en la carpeta correcta
- [ ] ✅ La foto está copiada a `assets/images/profile.jpg`
- [ ] ✅ Los enlaces de LinkedIn y GitHub están correctos
- [ ] ✅ El README.md está actualizado
- [ ] ✅ No hay archivos temporales o de sistema
- [ ] ✅ El `.gitignore` está configurado correctamente

## 🎉 **Resultado final**

Una vez completados todos los pasos, tendrás:
- ✅ Tu portafolio en GitHub
- ✅ Sitio web público en GitHub Pages
- ✅ Control de versiones de tu código
- ✅ Posibilidad de colaborar con otros
- ✅ Historial de todos los cambios

**URL de tu portafolio:** `https://luisprado119.github.io/portafolio-luis-prado/`

---

**💡 Tip:** Guarda este archivo para futuras referencias cuando necesites actualizar tu portafolio.
