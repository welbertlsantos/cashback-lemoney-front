import { CASH_BACK_API } from './taskdesk.api';
import { User } from '../model/User.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  authenticate (user: User) {
    const url = `${CASH_BACK_API}/user/auth`;
    const headers = this.headers();
    return this.http.post(url, user, { "headers": headers});
  }

  createOrUpdate(user : User) {
    if (user.id != null && user.id != '' ){
      return this.http.put(`${ CASH_BACK_API}/api/user`, user);
    } else {
      user.id = null;
      return this.http.post(`${ CASH_BACK_API}/api/user`, user);
    }
  }
    
  
  findAll(page: number, count: number){
    return this.http.get(`${ CASH_BACK_API}/api/user/${page}/${count}`);
  }

  findById(id: string) {
    return this.http.get(`${ CASH_BACK_API}/api/user/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`${ CASH_BACK_API}/api/user/${id}`);
  }

  private headers () {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return headers;
  }

  
}
