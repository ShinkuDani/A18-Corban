import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../../loginUser';

@Injectable({
  providedIn: 'root'
})
export class CorbanService {

  loginUser = new LoginUser()
  token = ''

   headers = new HttpHeaders()
  .set('Authorization', ´Bearer ${token}´ );


  constructor(private http: HttpClient) { }

  URL = 'https://api4.ajin.io/v2'
  

  getToken(): Observable<any> {
    return this.http.post(`${this.URL}/login`, {'accessKey':this.loginUser.user, 'password':this.loginUser.password});
  }

  getToken2(loginUser:string, passwordUser:string): Observable<any> {
    return this.http.post(`${this.URL}/login`, {'accessKey':loginUser, 'password':passwordUser});
  }

  getCustomers(): Observable<any> {
    return this.http.get(`${this.URL}/customers`)
  }

  getCustomer(id:any): Observable<any> {
    return this.http.get(`${this.URL}/customers/${id}`)
  }

  postCustomer(body:any): Observable<any>{

    return this.http.post(`${this.URL}/customers`, body)
  }

  putCustomer(id:string, body:any): Observable<any>{
  
    return this.http.put(`${this.URL}/customers/${id}`, body)
  }
  
  deleteCustomer(id:string){
  
    return this.http.delete(`${this.URL}/customers/${id}`)
  }

  

  

  

}
