import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = environment.baseURL


  constructor(public http:HttpClient) { }

  register(data){

    return this.http.post( this.baseURL + '/user/register',data)
  }
  mail(body) {
    
    return this.http.post( this.baseURL + '/mail/sendMail',body)

  }

  login(data){

     return this.http.post(this.baseURL + '/user/login', data)

  }
 
}

