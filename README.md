# 🏠 Sistema Conjuntos Residenciales - Backend API

Sistema completo de gestión para conjuntos residenciales desarrollado en Node.js con PostgreSQL.

## 🚀 Características

- **Gestión de Usuarios**: Administradores, propietarios, inquilinos, personal
- **Administración de Apartamentos**: Estados, contratos, información completa
- **Sistema de Pagos**: Cuotas, servicios, multas con seguimiento
- **Mantenimiento**: Solicitudes, asignaciones, costos y seguimiento
- **Airbnb Integration**: Gestión de huéspedes temporales
- **Notificaciones**: Sistema completo de alertas y comunicaciones
- **Reportes de Daños**: Seguimiento y resolución de incidentes

## 🛠️ Stack Tecnológico

- **Backend**: Node.js + Express.js
- **Base de Datos**: PostgreSQL con esquemas avanzados
- **Autenticación**: JWT (JSON Web Tokens)
- **Seguridad**: bcrypt, Helmet, CORS
- **Logging**: Morgan
- **Environment**: dotenv

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 16+
- PostgreSQL 12+
- npm o yarn

### Pasos de instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/loltrolgamer12/residential_complex.git
cd residential_complex

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones

# 4. Crear base de datos
# Ejecutar scripts SQL proporcionados en /docs

# 5. Ejecutar en desarrollo
npm run dev
```

## 🔧 Configuración

### Variables de Entorno (.env)

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=residential_complex
DB_USER=postgres
DB_PASS=your_password

# JWT Configuration
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=24h
```

## 📚 API Endpoints

### Health Check
- `GET /health` - Verificar estado del servidor

### Autenticación
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/register` - Registrar usuario

### Usuarios
- `GET /api/users` - Listar usuarios
- `GET /api/users/:id` - Obtener usuario específico
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

### Apartamentos
- `GET /api/apartments` - Listar apartamentos
- `POST /api/apartments` - Crear apartamento
- `PUT /api/apartments/:id` - Actualizar apartamento
- `PUT /api/apartments/:id/status` - Cambiar estado

### Pagos
- `GET /api/payments` - Listar pagos
- `POST /api/payments` - Crear pago
- `PUT /api/payments/:id/paid` - Marcar como pagado

### Mantenimiento
- `GET /api/maintenance/requests` - Listar solicitudes
- `POST /api/maintenance/requests` - Crear solicitud
- `PUT /api/maintenance/requests/:id/status` - Actualizar estado

## 🧪 Testing

```bash
# Ejecutar servidor de desarrollo
npm run dev

# Test endpoints básicos
curl http://localhost:3000/health
curl http://localhost:3000/api/test
```

## 📖 Documentación

### Usuarios de Prueba

```json
{
    "admin": {
        "email": "admin@complejo.com",
        "password": "123456"
    },
    "owner": {
        "email": "juan.perez@email.com", 
        "password": "123456"
    }
}
```

## 🔐 Seguridad

- Autenticación JWT obligatoria
- Validación de roles y permisos
- Sanitización de entrada de datos
- Rate limiting implementado
- Logs de auditoría completos

## 📁 Estructura del Proyecto

```
residential_complex/
├── config/              # Configuraciones
├── src/
│   ├── domain/          # Entidades de negocio
│   ├── application/     # Casos de uso
│   ├── infrastructure/  # Capa de infraestructura
│   │   ├── web/         # Rutas, controladores, middleware
│   │   └── database/    # Conexiones y repositorios
│   └── shared/          # Utilidades compartidas
├── docs/                # Documentación
├── tests/               # Pruebas
└── package.json
```

## 🤝 Contribución

Este es un proyecto universitario. Para contribuir:

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Proyecto académico - Universidad Surcolombiana

## 👨‍💻 Desarrollador

- **GitHub**: [@loltrolgamer12](https://github.com/loltrolgamer12)
- **Proyecto**: Sistema de Conjuntos Residenciales
- **Universidad**: Surcolombiana

---

⭐ Si este proyecto te parece útil, ¡dale una estrella!
