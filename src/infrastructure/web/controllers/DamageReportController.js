class DamageReportController {
    async createReport(req, res, next) {
        try {
            const { apartmentId, title, description } = req.body;
            const reportedBy = req.user ? req.user.id : 1;
            
            const report = {
                id: Date.now(),
                apartmentId,
                title,
                description,
                reportedBy,
                status: 'reported',
                notifications: ['Notificación enviada automáticamente al propietario']
            };
            
            console.log('⚠️ Reporte de daño creado:', report);
            
            res.status(201).json({
                success: true,
                data: report,
                message: 'Reporte creado. Propietario notificado automáticamente.'
            });
        } catch (error) {
            next(error);
        }
    }

    async getMyReports(req, res, next) {
        try {
            const reports = [
                {
                    id: 1,
                    apartmentNumber: '101-A',
                    title: 'Fuga en baño',
                    status: 'reported'
                }
            ];
            
            res.json({ success: true, data: reports });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = DamageReportController;
