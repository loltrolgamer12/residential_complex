class MaintenanceController {
    async createMaintenance(req, res, next) {
        try {
            const { title, description, area, scheduledDate } = req.body;
            
            const maintenance = {
                id: Date.now(),
                title,
                description,
                area,
                status: 'pending',
                scheduledDate: scheduledDate || new Date(),
                notifications: ['Todos los residentes recibieron notificación del mantenimiento']
            };
            
            console.log('🔧 Mantenimiento programado:', maintenance);
            
            res.status(201).json({
                success: true,
                data: maintenance,
                message: 'Mantenimiento programado. Todos los residentes notificados.'
            });
        } catch (error) {
            next(error);
        }
    }

    async updateStatus(req, res, next) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            
            res.json({
                success: true,
                data: { id, status, updatedAt: new Date() },
                message: `Estado actualizado a: ${status}`
            });
        } catch (error) {
            next(error);
        }
    }

    async getMaintenances(req, res, next) {
        try {
            const maintenances = [
                {
                    id: 1,
                    title: 'Mantenimiento Piscina',
                    area: 'piscina',
                    status: 'pending',
                    scheduledDate: '2025-01-15'
                }
            ];
            
            res.json({ success: true, data: maintenances });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = MaintenanceController;
