import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InteSpriService {

  private userUrl = 'http://localhost:8081/bank/txn?xrNo=dfkdkf';
  
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.userUrl);
    console.log(this.userUrl);
  }

}
