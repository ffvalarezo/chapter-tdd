import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TransferRequest {
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  idempotencyKey?: string;
}

export interface TransferResponse {
  status: 'OK' | 'RECHAZADO';
  message: string;
}

@Injectable({ providedIn: 'root' })
export class TransferApi {
  private baseUrl = '/api'; // ajusta según tu dev proxy o env

  constructor(private http: HttpClient) {}

  postTransfer(req: TransferRequest): Observable<TransferResponse> {
    return this.http.post<TransferResponse>(`${this.baseUrl}/transfers`, req);
  }
}
