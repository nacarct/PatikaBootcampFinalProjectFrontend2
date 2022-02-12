import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  url = 'http://localhost:5000/api/Policy/'
  constructor(private httpClient: HttpClient) { }

  getPolices(){
    return this.httpClient.get<any>(this.url + 'GetAllPolicyView');
  }
}
