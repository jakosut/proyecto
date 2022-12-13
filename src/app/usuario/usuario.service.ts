import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuarioDTO } from './usuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  private apiUrl = environment.apiUrl +'Usuarios';

  public obtenerUsuario(id:string): Observable<usuarioDTO> {
    return this.http.get<usuarioDTO>(this.apiUrl+'/'+id).pipe(
      catchError(this.handleError));
  }

  public obtenerCantidadUsuarios(): Observable<number>{
    return this.http.get<number>(this.apiUrl+'/CantidadUsuarios').pipe(
      catchError(this.handleError));
  }
  public obtenerTodos(pagina:number, totalRegistrosPorPagina: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina',pagina.toString());
    params = params.append('RegistrosPorPagina', totalRegistrosPorPagina.toString());
    return this.http.get<usuarioDTO[]>(this.apiUrl, {observe:'response',params}).pipe(
      catchError(this.handleError));
  }
  public crearUsuario(usuario: usuarioDTO){
    return this.http.post(this.apiUrl,usuario).pipe(
      catchError(this.handleError));
  }
  public editarUsuario(usuario: usuarioDTO){
    return this.http.put(this.apiUrl,usuario).pipe(
      catchError(this.handleError));
  }
  public eliminarUsuario(id:string){
    return this.http.delete(this.apiUrl+'/'+id).pipe(
      catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
