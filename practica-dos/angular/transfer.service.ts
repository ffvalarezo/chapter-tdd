import { AccountRepo } from './account-repo';
import { TransferResult } from './models';

export class TransferService {
  constructor(private repo: AccountRepo) {}

  transfer(fromId: string, toId: string, amount: number): TransferResult {
    if (amount <= 0) return { status: 'RECHAZADO', message: 'Monto inválido' };
    if (fromId === toId) return { status: 'RECHAZADO', message: 'Cuentas iguales' };

    const from = this.repo.find(fromId);
    const to   = this.repo.find(toId);
    if (!from || !to) return { status: 'RECHAZADO', message: 'Cuenta inexistente' };
    if (!from.active || !to.active) return { status: 'RECHAZADO', message: 'Cuenta inactiva' };
    if (from.balance < amount) return { status: 'RECHAZADO', message: 'Fondos insuficientes' };

    this.repo.save({ ...from, balance: from.balance - amount });
    this.repo.save({ ...to,   balance: to.balance + amount });
    return { status: 'OK', message: '' };
  }
}
