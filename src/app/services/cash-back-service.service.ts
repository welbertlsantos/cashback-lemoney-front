import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task as CashBack } from '../model/Task.model';
import { CASH_BACK_API } from './taskdesk.api';


@Injectable()
export class CashBackServiceService {

  constructor(private http: HttpClient) { }

  createCashBack(cash: CashBack) {
    const headers = this.headers();
    const url = `${CASH_BACK_API}/program-cashback`;
    return this.http.post(url, cash, { "headers" : headers});
  }

  updateCashBack(cash: CashBack) {
    const headers = this.headers();
    const url = `${CASH_BACK_API}/program-cashback/${cash.id}`;
    return this.http.put(url , cash, { "headers": headers });
  }
  
  findAllCashBackByUser(idUsuario: string) {
    const headers = this.headers();
    const url = `${CASH_BACK_API}/program-cashback/${idUsuario}`;
    return this.http.get(url, { "headers": headers});
  }

  findCashBack(idProduto: string, idUsuario: string, valorPedido: number) {
    const headers = this.headers();
    const url = `${CASH_BACK_API}/program-cashback?idProduto=${idProduto}&idUsuario=${idUsuario}&valorPedido=${valorPedido}`;
    return this.http.get(url, { "headers": headers });
  }

  deleteCashBack (id: String) {
    const headers = this.headers();
    return this.http.patch(`${CASH_BACK_API}/${id}`, { "headers": headers});
  }

  private headers () {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return headers;
  }
}
