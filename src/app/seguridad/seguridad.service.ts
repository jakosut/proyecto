import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of,Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { credencialesUsuario, respuestaAutenticacion } from './seguridad';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = environment.apiUrl+'usuarios';
  private readonly token= 'token';
  private readonly expiracion= 'token-expiracion';
  private loggedIn = new BehaviorSubject<boolean>(false);




  estaLogueado():boolean{
    const token = localStorage.getItem(this.token);
    if(!token){return false;}
    const expiracion = localStorage.getItem(this.expiracion);
    const expiracionFecha = new Date(expiracion);
    if(expiracionFecha <= new Date()) {this.logout(); return false;}
    return true;
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  logout(){
    localStorage.removeItem(this.token);
    localStorage.removeItem(this.expiracion);
    this.loggedIn.next(false);
  }

  obtenerCampoJWT(campo: string):string{
    const token = localStorage.getItem(this.token);
    if(!token){return'';}
    var dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[campo];
  }

  obtenerRol():string{
    return 'admin';
  }
  login(credenciales:credencialesUsuario):Observable<respuestaAutenticacion>{
    return this.httpClient.post<respuestaAutenticacion>(this.apiUrl + '/login',credenciales);
  }
  guardarToken(token:string,expiracion:string){
    localStorage.setItem(this.token,token);
    localStorage.setItem(this.expiracion,expiracion);
    this.loggedIn.next(true);
  }
}
