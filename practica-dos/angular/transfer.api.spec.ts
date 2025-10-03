import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TransferApi, TransferRequest, TransferResponse } from './transfer.api';

describe('TransferApi (HTTP adapter)', () => {
  let api: TransferApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransferApi]
    });
    api = TestBed.inject(TransferApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('envía POST /transfers y mapea respuesta OK', () => {
    const req: TransferRequest = { fromAccountId: 'A1', toAccountId: 'A2', amount: 200, idempotencyKey: 'k-1' };
    const mock: TransferResponse = { status: 'OK', message: '' };

    api.postTransfer(req).subscribe(res => {
      expect(res.status).toBe('OK');
      expect(res.message).toBe('');
    });

    const call = httpMock.expectOne('/api/transfers');
    expect(call.request.method).toBe('POST');
    expect(call.request.body).toEqual(req);

    call.flush(mock);
  });

  it('responde RECHAZADO cuando el backend así lo indica', () => {
    const req: TransferRequest = { fromAccountId: 'A1', toAccountId: 'A2', amount: 0 };
    const mock: TransferResponse = { status: 'RECHAZADO', message: 'Monto inválido' };

    api.postTransfer(req).subscribe(res => {
      expect(res.status).toBe('RECHAZADO');
      expect(res.message).toBe('Monto inválido');
    });

    const call = httpMock.expectOne('/api/transfers');
    call.flush(mock, { status: 200, statusText: 'OK' });
  });
});
