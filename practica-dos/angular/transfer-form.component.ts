import { Component, signal } from '@angular/core';
import { TransferApi } from './transfer.api';

@Component({
  selector: 'app-transfer-form',
  standalone: true,
  template: `
    <form (ngSubmit)="submit()" #f="ngForm" style="display:grid; gap:8px; max-width:360px">
      <input name="from" [(ngModel)]="from" placeholder="Cuenta origen" required />
      <input name="to"   [(ngModel)]="to"   placeholder="Cuenta destino" required />
      <input name="amt"  [(ngModel)]="amount" type="number" min="1" placeholder="Monto" required />
      <button type="submit" [disabled]="!f.valid">Transferir</button>
    </form>
    <p *ngIf="message()">{{message()}}</p>
  `
})
export class TransferFormComponent {
  from = ''; to = ''; amount: number | null = null;
  message = signal<string>('');

  constructor(private api: TransferApi) {}
  submit() {
    this.api.postTransfer({
      fromAccountId: this.from,
      toAccountId: this.to,
      amount: Number(this.amount ?? 0)
    }).subscribe(r => this.message.set(r.message || r.status));
  }
}
