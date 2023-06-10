import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SosResponse } from '../interfaces/responses/SosResponse';

@Injectable({
  providedIn: 'root'
})
export class SosService {

  private readonly apiUrl = 'http://www.localhost:8080/sos'

  constructor(private http: HttpClient) {}

  soss$ = <Observable<SosResponse>>
  this.http.get<SosResponse>(`${this.apiUrl}`)
  .pipe(
    tap(console.log),
    catchError(this.handleErro)
  );

  private handleErro(err: HttpErrorResponse): Observable<never>{
    return throwError (()=> err.status);
  }


}
