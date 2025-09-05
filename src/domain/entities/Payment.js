class Payment {
    constructor({ id, apartmentId, amount, dueDate, paymentDate, status, description, createdAt, updatedAt }) {
        this.id = id;
        this.apartmentId = apartmentId;
        this.amount = amount;
        this.dueDate = dueDate;
        this.paymentDate = paymentDate;
        this.status = status; // pending, paid, overdue
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    isOverdue() { return this.status === 'pending' && new Date() > this.dueDate; }
    isPaid() { return this.status === 'paid'; }
}

module.exports = Payment;
