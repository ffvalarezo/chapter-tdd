export type Status = 'OK' | 'RECHAZADO';

export interface Account {
  id: string;
  balance: number;
  active: boolean;
}

export interface TransferResult {
  status: Status;
  message: string;
}
