import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorbanService {

   headers = new HttpHeaders()
  .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2QxMzA2ZTAtZTUxZS00ODY2LWEzZmQtZjM4MjE3ZGQ1MmIyIiwic2Vzc2lvbl9pZCI6ImNmMTEzZDQ2LWE3ZTQtNDRiMS04ZTg2LThlZmJjNmNiNjFiMiIsInNpZ25hbF9pZCI6ImVlY2Y0NDZmLWM1ZGEtNDAwMS1hYjE4LTIyMWZlODYzYjhmZiIsImhvc3QiOiJodHRwczovL2FwaTQuYWppbi5pby9pbmRleC5odG1sIiwiaXAiOiIxOTEuMTgzLjM4LjQyIiwibmJmIjoxNzIxODY2MDkxLCJleHAiOjE3MjE5NTI0OTEsImlhdCI6MTcyMTg2NjA5MX0.98mibH3gHtNqltS1IP0qrMYeh9NMK5ZEypPdCa472Ko');

  constructor(private http: HttpClient) { }

  URL = 'https://api4.ajin.io/v2'

  getToken(){
    return this.http.post(`${this.URL}/login`, {'accessKey':'daniel-silvasales@hotmail.com', 'password':'DanielTesteCorban360'})
  }

  getCustomers(){
    return this.http.get(`${this.URL}/customers`)
  }

  getCustomers2(){
    return this.http.get(`https://api4.ajin.io/v2/customers`, { headers: this.headers})
  }

}
