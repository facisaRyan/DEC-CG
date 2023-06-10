import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,  throwError, forkJoin } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { SosResponse } from '../interfaces/responses/SosResponse';
import { SafeHouseResponse } from '../interfaces/responses/SafeHouseResponse';
import { MapResponse } from '../interfaces/responses/MapaResponse';

@Injectable({
  providedIn: 'root'
})
export class MapService  {
  private readonly apiUrl = 'http://www.localhost:8080'

  constructor(private http: HttpClient) { }

  requests = [
    this.http.get<SosResponse>(`${this.apiUrl}/sos`).pipe(tap(console.log),
    catchError(this.handleErro)),
    this.http.get<SafeHouseResponse>(`${this.apiUrl}/safeHouse/all`).pipe(tap(console.log),
    catchError(this.handleErro)),
  ];

   mapData$ = <Observable<MapResponse>>
    forkJoin(this.requests).pipe(
      map(([sos,safeHouses])=> {
        return{
          sos: sos,
          safeHouses: safeHouses,
        }
      })
    )


  private handleErro(err: HttpErrorResponse): Observable<never>{
    return throwError (()=> err.status);
  }
}
