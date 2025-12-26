import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = "http://localhost:8080/api";



  constructor(private http:HttpClient) { }

  login(userName: string, password: string){
    return this.http.post<{ token: string }>(`${this.API}/auth/login`, {userName, password})
      .pipe(tap(res => this.saveToken(res.token)));

  }

  register(payload:any){
    return this.http.post(`${this.API}/users/register`, payload)
  }

  saveToken(token:string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    return !!this.getToken();
  }
}
