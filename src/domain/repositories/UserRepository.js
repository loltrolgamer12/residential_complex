const fs = require('fs').promises;
const path = require('path');

class UserRepository {
    constructor(filePath) {
        this.filePath = filePath || path.resolve(__dirname, '../../../../data/users.json');
    }

    async _ensureFile() {
        const dir = path.dirname(this.filePath);
        try {
            await fs.mkdir(dir, { recursive: true });
            try {
                await fs.access(this.filePath);
            } catch (e) {
                await fs.writeFile(this.filePath, JSON.stringify([], null, 2), 'utf8');
            }
        } catch (err) {
            throw new Error('No se pudo crear directorio/data file: ' + err.message);
        }
    }

    async _readAll() {
        await this._ensureFile();
        const raw = await fs.readFile(this.filePath, 'utf8');
        try {
            return JSON.parse(raw || '[]');
        } catch (err) {
            await fs.writeFile(this.filePath, JSON.stringify([], null, 2), 'utf8');
            return [];
        }
    }

    async _writeAll(users) {
        await this._ensureFile();
        await fs.writeFile(this.filePath, JSON.stringify(users, null, 2), 'utf8');
    }

    async findByEmail(email) {
        if (!email) return null;
        const users = await this._readAll();
        return users.find(u => (u.email || '').toLowerCase() === email.toLowerCase()) || null;
    }

    async findById(id) {
        if (!id) return null;
        const users = await this._readAll();
        return users.find(u => String(u.id) === String(id)) || null;
    }

    async create(userObj) {
        const users = await this._readAll();

        const id = Date.now();
        const now = new Date().toISOString();

        const newUser = {
            id,
            name: userObj.name,
            email: userObj.email,
            cedula: userObj.cedula || null,
            phone: userObj.phone || null,
            role: userObj.role || 'tenant',
            password: userObj.password,
            isActive: typeof userObj.isActive === 'boolean' ? userObj.isActive : true,
            createdAt: userObj.createdAt || now,
            updatedAt: userObj.updatedAt || now
        };

        users.push(newUser);
        await this._writeAll(users);
        return newUser;
    }

    async getAll() {
        return await this._readAll();
    }
}

module.exports = UserRepository;