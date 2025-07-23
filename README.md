# 🎵 Song Service

Microservicio para gestionar canciones con operaciones **CRUD** usando **Node.js**, **Express.js** y **MongoDB Atlas**, siguiendo una arquitectura limpia (Clean Architecture).

---

## 📁 Estructura de Carpetas

```bash
song-service/
├── src/
│   ├── config/                # Configuración (env, database)
│   ├── core/                  # Entidad Song
│   ├── infrastructure/        # MongoDB y HTTP
│   │   ├── database/          # Esquema Mongoose
│   │   └── http/
│   │       ├── routes/        # Endpoints
│   │       └── middlewares/   # Validaciones y errores
│   ├── application/           # Casos de uso (servicios)
│   ├── interfaces/            # Controladores
│   └── index.js               # Punto de entrada principal
├── .env                       # Variables de entorno (NO subir)
├── .gitignore
├── package.json
├── README.md
```

---

## 🔧 Tecnologías y Herramientas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [Postman](https://www.postman.com/)
- Arquitectura **Clean Architecture** (separación de capas)

---

## 🧠 Funcionalidades CRUD

### ✅ `GET /songs`
Obtiene todas las canciones almacenadas.

### ✅ `POST /songs`
Crea una nueva canción.
```json
{
  "name": "Nombre de la canción",
  "path": "URL de YouTube",
  "plays": 0
}
```

### ✅ `PUT /songs/:id`
Actualiza el nombre o path de una canción por su ID.

### ✅ `DELETE /songs/:id`
Elimina una canción por su ID.

---

## 🛠️ Instalación y Ejecución Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/ShanderGonzalez/Songs_Microservicio.git
cd Songs_Microservicio
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` y añade:

```env
PORT=3000
MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/musicdb?retryWrites=true&w=majority
```


### 4. Ejecutar el servidor

```bash
npm start
```

> Servidor escuchando en `http://localhost:3000/songs`

---

## 🧪 Pruebas

Usar **Postman** o **Insomnia** para probar los endpoints:

- `GET` → `/songs`
- `POST` → `/songs`
- `PUT` → `/songs/:id`
- `DELETE` → `/songs/:id`

---

## 🚀 Despliegue en la nube

Este microservicio está listo para ser desplegado en:
- [Render](https://render.com)

---

## 📄 Licencia

MIT - Shander González
