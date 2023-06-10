import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CoordenateData } from '../interfaces/CoordenateData';
import { SafeHouseResponse } from '../interfaces/responses/SafeHouseResponse';
import { SafeHouse } from '../interfaces/SafeHouse';

@Injectable({
  providedIn: 'root'
})
export class SafeHouseService {

  private readonly apiUrl = 'http://www.localhost:8080/safeHouse'

  constructor(private http: HttpClient) {}

  // tudinho tlgd

  safeHouses$ = <Observable<SafeHouseResponse>>
  this.http.get<SafeHouseResponse>(`${this.apiUrl}/all`)
  .pipe(
    tap(console.log),
    catchError(this.handleErro)
  );

  // salvar tlgd

  save$ = (safeHouse:SafeHouse) => <Observable<SafeHouseResponse>>
  this.http.post<SafeHouseResponse>(`${this.apiUrl}/save`, safeHouse)
  .pipe(
    tap(console.log),
    catchError(this.handleErro)
  )

  private handleErro(err: HttpErrorResponse): Observable<never>{
    return throwError (()=> err.status);
  }






}
