import { AccountRepoInMemory } from './account-repo';
import { TransferService } from './transfer.service';

describe('TransferService (dominio)', () => {
  let repo: AccountRepoInMemory;
  let svc: TransferService;

  beforeEach(() => {
    repo = new AccountRepoInMemory([
      { id: 'A1', balance: 500, active: true },
      { id: 'A2', balance: 100, active: true },
    ]);
    svc = new TransferService(repo);
  });

  it('rechaza monto no positivo', () => {
    const r = svc.transfer('A1','A2',0);
    expect(r.status).toBe('RECHAZADO');
    expect(r.message).toBe('Monto inválido');
  });

  it('rechaza cuentas iguales', () => {
    const r = svc.transfer('A1','A1',100);
    expect(r.status).toBe('RECHAZADO');
    expect(r.message).toBe('Cuentas iguales');
  });

  it('rechaza fondos insuficientes', () => {
    const r = svc.transfer('A1','A2',9999);
    expect(r.status).toBe('RECHAZADO');
    expect(r.message).toBe('Fondos insuficientes');
  });

  it('transfiere y actualiza saldos', () => {
    const r = svc.transfer('A1','A2',200);
    expect(r.status).toBe('OK');
    expect(repo.find('A1')!.balance).toBe(300);
    expect(repo.find('A2')!.balance).toBe(300);
  });
});
