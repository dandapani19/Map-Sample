import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient,private router:Router){}
   
  GetCabList(): Observable<any>{
    return this.httpClient.get(this.API_URL+'/cab');
  }
  CreateUser(body): Observable<any>{
    return this.httpClient.post(this.API_URL+'/cab/cabcreate',body);
  }
  CreateCab(body): Observable<any>{
    return this.httpClient.post(this.API_URL+'/cab/usercreate',body);
  }
}
