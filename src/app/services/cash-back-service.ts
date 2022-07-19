import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CashBack } from '../model/Cashback.model';
import { CASH_BACK_API } from './cashBackApi';
import { SharedService } from './shared.service';


@Injectable()
export class CashBackService {

  public shared: SharedService

  constructor(
    private http: HttpClient
  ) {
    this.shared = SharedService.getInstance();

   }

  createOrReplaceCashBack(cashBack: CashBack) {
    const headers = this.headers();
    const url = `${CASH_BACK_API}/program-cashback`;

    if (!cashBack.id) {
      return this.http.post(url, cashBack, { "headers" : headers});
    } else {
      return this.http.put(`${url}/${cashBack.id}` , cashBack, { "headers": headers });
    }
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
    return this.http.patch(`${CASH_BACK_API}/program-cashback/${id}`, { "headers": headers});
  }

  findById(id: string) {
    const headers = this.headers();
    return this.http.get(`${CASH_BACK_API}/program-cashback/program/${id}`, { "headers": headers });
  }

  private headers () {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return headers;
  }
}
