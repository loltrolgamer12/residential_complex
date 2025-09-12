const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../../../../config/environment');

class AuthController {
    async register(req, res, next) {
        try {
            const { name, email, cedula, phone, password, role = 'tenant' } = req.body;

            // Validaciones básicas
            if (!name || !email || !cedula || !phone || !password) {
                return res.status(400).json({
                    success: false,
                    error: 'Todos los campos son obligatorios: name, email, cedula, phone, password',
                    statusCode: 400
                });
            }

            // Validar formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({
                    success: false,
                    error: 'Formato de email inválido',
                    statusCode: 400
                });
            }

            // Validar longitud de contraseña
            if (password.length < 6) {
                return res.status(400).json({
                    success: false,
                    error: 'La contraseña debe tener al menos 6 caracteres',
                    statusCode: 400
                });
            }

            // Validar roles permitidos
            const allowedRoles = ['admin', 'owner', 'tenant', 'security', 'airbnb_guest'];
            if (!allowedRoles.includes(role)) {
                return res.status(400).json({
                    success: false,
                    error: `Rol inválido. Roles permitidos: ${allowedRoles.join(', ')}`,
                    statusCode: 400
                });
            }

            // Simular verificación de email existente
            // En producción, aquí consultarías la base de datos
            if (email === 'admin@residencial.com' || email === 'juan.perez@email.com') {
                return res.status(409).json({
                    success: false,
                    error: 'El email ya está registrado',
                    statusCode: 409
                });
            }

            // Hashear contraseña
            const hashedPassword = await bcrypt.hash(password, 12);

            // Crear usuario (simulado)
            const newUser = {
                id: Date.now(),
                name,
                email,
                cedula,
                phone,
                role,
                password: hashedPassword, // En respuesta no se debería enviar
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            // Generar token JWT
            const token = jwt.sign(
                { 
                    id: newUser.id, 
                    email: newUser.email, 
                    role: newUser.role 
                },
                JWT_SECRET,
                { expiresIn: JWT_EXPIRES_IN }
            );

            // Remover password de la respuesta
            const { password: _, ...userWithoutPassword } = newUser;

            console.log(`👤 Nuevo usuario registrado: ${name} (${email}) - Rol: ${role}`);

            res.status(201).json({
                success: true,
                message: 'Usuario registrado exitosamente',
                data: {
                    token,
                    user: userWithoutPassword
                }
            });

        } catch (error) {
            console.error('Error en registro:', error);
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            
            if (!email || !password) {
                return res.status(400).json({
                    success: false,
                    error: 'Email y contraseña son requeridos',
                    statusCode: 400
                });
            }

            // Usuarios demo para testing
            const demoUsers = {
                'admin@residencial.com': {
                    id: 1,
                    name: 'Administrador',
                    email: 'admin@residencial.com',
                    role: 'admin',
                    password: 'admin123'
                },
                'juan.perez@email.com': {
                    id: 2,
                    name: 'Juan Pérez',
                    email: 'juan.perez@email.com',
                    role: 'owner',
                    password: '123456'
                },
                'maria.garcia@email.com': {
                    id: 3,
                    name: 'María García',
                    email: 'maria.garcia@email.com',
                    role: 'tenant',
                    password: '123456'
                },
                'seguridad@residencial.com': {
                    id: 4,
                    name: 'Personal Seguridad',
                    email: 'seguridad@residencial.com',
                    role: 'security',
                    password: 'seguridad123'
                }
            };

            const user = demoUsers[email];
            
            if (!user || user.password !== password) {
                return res.status(401).json({
                    success: false,
                    error: 'Credenciales inválidas',
                    statusCode: 401
                });
            }

            // Generar token
            const token = jwt.sign(
                { id: user.id, email: user.email, role: user.role },
                JWT_SECRET,
                { expiresIn: JWT_EXPIRES_IN }
            );

            const { password: _, ...userWithoutPassword } = user;

            console.log(`🔐 Login exitoso: ${user.name} (${user.role})`);

            res.json({
                success: true,
                message: 'Login exitoso',
                data: {
                    token,
                    user: userWithoutPassword
                }
            });

        } catch (error) {
            console.error('Error en login:', error);
            next(error);
        }
    }

    async getProfile(req, res, next) {
        try {
            // El middleware auth ya validó el token y agregó req.user
            const user = req.user;

            res.json({
                success: true,
                data: {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    // Añadir más datos del perfil según necesites
                }
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AuthController;