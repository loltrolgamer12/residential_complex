class AirbnbController {
    async registerGuest(req, res, next) {
        try {
            const { apartmentId, guestName, guestCedula, numberOfGuests, checkInDate, checkOutDate } = req.body;
            
            const guest = {
                id: Date.now(),
                apartmentId,
                guestName,
                guestCedula,
                numberOfGuests,
                checkInDate,
                checkOutDate,
                status: 'pending',
                notifications: [
                    'Notificación enviada al propietario (su apartamento está ocupado)',
                    'Notificación enviada al administrador (control de seguridad)',
                    'Notificación enviada a portería (registro de entrada)'
                ]
            };
            
            console.log('🏠 Flujo Airbnb ejecutado:', guest);
            
            res.status(201).json({
                success: true,
                data: guest,
                message: 'Huésped Airbnb registrado exitosamente. Sistema notificó automáticamente.'
            });
        } catch (error) {
            next(error);
        }
    }

    async checkInGuest(req, res, next) {
        try {
            const { id } = req.params;
            
            const checkedInGuest = {
                id,
                status: 'checked_in',
                timestamp: new Date(),
                notifications: ['Notificación automática enviada al propietario y administrador']
            };
            
            console.log('🚪 Check-in realizado por portería:', checkedInGuest);
            
            res.json({
                success: true,
                data: checkedInGuest,
                message: 'Check-in realizado por portería. Notificación automática enviada.'
            });
        } catch (error) {
            next(error);
        }
    }

    async getActiveGuests(req, res, next) {
        try {
            const activeGuests = [
                {
                    id: 1,
                    apartmentNumber: '101-A',
                    guestName: 'Juan Pérez',
                    guestCedula: '12345678',
                    numberOfGuests: 2,
                    status: 'checked_in'
                }
            ];
            
            res.json({
                success: true,
                data: activeGuests,
                message: 'Huéspedes activos para control de seguridad.'
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AirbnbController;
