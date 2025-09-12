# 🏠 Sistema Conjuntos Residenciales - Backend API

Sistema completo de gestión para conjuntos residenciales desarrollado en Node.js.

## 🚀 Características

- **Gestión de Usuarios**: Administradores, propietarios, inquilinos, personal
- **Administración de Apartamentos**: Estados, contratos, información completa
- **Sistema de Pagos**: Cuotas, servicios, multas con seguimiento
- **Mantenimiento**: Solicitudes, asignaciones, costos y seguimiento
- **Airbnb Integration**: Gestión de huéspedes temporales
- **Notificaciones**: Sistema completo de alertas y comunicaciones
- **Reportes de Daños**: Seguimiento y resolución de incidentes
- **Sistema de Logs**: Registro detallado de operaciones y errores
- **Respaldo Automático**: Backup programado de datos críticos
- **Optimización de Rendimiento**: Compresión, caché y rate limiting

## 🛠️ Stack Tecnológico

- **Backend**: Node.js + Express.js
- **Autenticación**: JWT (JSON Web Tokens)
- **Seguridad**: bcrypt, Helmet, CORS, Rate Limiting
- **Logging**: Winston para logs estructurados
- **Environment**: dotenv para múltiples entornos
- **Monitoreo**: PM2 para gestión de procesos
- **Optimización**: Compression, Cache-Control
- **Testing**: Jest para pruebas unitarias e integración

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 16+
- npm o yarn
- PM2 (para producción)

### Desarrollo

```bash
# 1. Clonar repositorio
git clone https://github.com/loltrolgamer12/residential_complex.git
cd residential_complex

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones

# 4. Ejecutar en desarrollo
npm run dev
```

### Producción

```bash
# 1. Configurar entorno de producción
cp .env.example .env.production
# Editar .env.production con configuraciones de producción

# 2. Instalar PM2 globalmente
npm install -g pm2

# 3. Construir para producción
npm run build

# 4. Iniciar con PM2
npm run start:prod
```

## 🔧 Configuración

### Variables de Entorno

```env
# Configuración del Servidor
PORT=3000
NODE_ENV=development # o production
LOG_LEVEL=debug # o info en producción

# JWT y Seguridad
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
BCRYPT_ROUNDS=12
CORS_ORIGIN=http://localhost:3000

# Límites y Caché
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100
CACHE_DURATION=86400000

# Backup
BACKUP_ENABLED=true
BACKUP_INTERVAL=86400000
BACKUP_RETENTION_DAYS=7
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
- `PUT /api/maintenance/requests/:id` - Actualizar solicitud

## 🔍 Logs y Monitoreo

El sistema incluye logs estructurados usando Winston:
- Logs de acceso y errores
- Rotación automática de logs
- Niveles diferentes para desarrollo y producción
- Monitoreo de recursos con PM2

## 💾 Sistema de Respaldo

Backup automático de datos críticos:
- Programación configurable
- Retención personalizable
- Compresión de backups
- Logs de operaciones de respaldo

## ⚡ Optimizaciones

- Compresión gzip/deflate
- Rate limiting por IP
- Caché de respuestas
- Validación de datos
- Headers de seguridad
- CORS configurado

## 🛡️ Seguridad

- JWT para autenticación
- Encriptación de contraseñas con bcrypt
- Headers de seguridad con Helmet
- Rate limiting contra ataques DoS
- Validación de datos de entrada
- CORS configurable

## 📜 Scripts

- `npm run dev` - Desarrollo con hot-reload
- `npm run build` - Construir para producción
- `npm run start:prod` - Iniciar en producción con PM2
- `npm run backup` - Ejecutar backup manual
- `npm test` - Ejecutar tests
- `npm run lint` - Verificar código

## 👥 Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles
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
