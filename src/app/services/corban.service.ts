import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorbanService {

   headers = new HttpHeaders()
  .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2QxMzA2ZTAtZTUxZS00ODY2LWEzZmQtZjM4MjE3ZGQ1MmIyIiwic2Vzc2lvbl9pZCI6ImNmMTEzZDQ2LWE3ZTQtNDRiMS04ZTg2LThlZmJjNmNiNjFiMiIsInNpZ25hbF9pZCI6ImVlY2Y0NDZmLWM1ZGEtNDAwMS1hYjE4LTIyMWZlODYzYjhmZiIsImhvc3QiOiJodHRwczovL2FwaTQuYWppbi5pby9pbmRleC5odG1sIiwiaXAiOiIxOTEuMTgzLjM4LjQyIiwibmJmIjoxNzIxODY2MDkxLCJleHAiOjE3MjE5NTI0OTEsImlhdCI6MTcyMTg2NjA5MX0.98mibH3gHtNqltS1IP0qrMYeh9NMK5ZEypPdCa472Ko');


  constructor(private http: HttpClient) { }

  URL = 'https://api4.ajin.io/v2'
  

  getToken(): Observable<any> {
    return this.http.post(`${this.URL}/login`, {'accessKey':'daniel-silvasales@hotmail.com', 'password':'DanielTesteCorban360'});
  }

  getCustomers(): Observable<any> {
    return this.http.get(`${this.URL}/customers`)
  }

  getCustomer(id:any): Observable<any> {
    return this.http.get(`${this.URL}/customers/${id}`)
  }

  postCustomer(body:any): Observable<any>{
    debugger
    return this.http.post(`${this.URL}/customers`, body)
  }

  putCustomer(id:string, body:any): Observable<any>{
    debugger
    return this.http.put(`${this.URL}/customers/${id}`, body)
  }

  putCustomer2(id:string, body:any): Observable<any>{
    debugger
    return this.http.put(`${this.URL}/customers/${id}`, {body, 'phones':[{'ddd': body.phone[0].ddd, 'number':body.phone[0].number}]})
  }

  deleteCustomer(id:string){
    debugger
    return this.http.delete(`${this.URL}/customers/${id}`)
  }

  

  

  

}
