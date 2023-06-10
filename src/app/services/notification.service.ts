import { Notification } from '../interfaces/Notification';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotificationResponse } from '../interfaces/responses/NotificationResponse';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly apiUrl = 'http://www.localhost:8080/notifications'

  constructor(private http: HttpClient) {}

  notifications$ = <Observable<NotificationResponse>>
  this.http.get<NotificationResponse>(`${this.apiUrl}/all`)
  .pipe(
    tap(console.log),
    catchError(this.handleErro)
  );

  // salvar tlgd

  save$ = (notification:Notification) => <Observable<NotificationResponse>>
  this.http.post<NotificationResponse>(`${this.apiUrl}/save`, notification)
  .pipe(
    tap(console.log),
    catchError(this.handleErro)
  );

  //update$ = (notification:Notification) => <Observable<NotificationResponse>>
  //this.http.put<NotificationResponse>(`${this.apiUrl}/save`, notification)
  //.pipe(
  //  tap(console.log),
  //  catchError(this.handleErro)
  //);

  delete$ = (notificationId: string) => <Observable<NotificationResponse>>
  this.http.delete<NotificationResponse>(`${this.apiUrl}/${notificationId}`)
  .pipe(
    tap(console.log),
    catchError(this.handleErro)
  );

  getOne$ = (notificationId: string) => <Observable<NotificationResponse>>
  this.http.get<NotificationResponse>(`${this.apiUrl}/getOne/${notificationId}`)
  .pipe(
    tap(console.log),
    catchError(this.handleErro)
  );

  private handleErro(err: HttpErrorResponse): Observable<never>{
    return throwError (()=> err.status);
  }

  /*
  private _jsonURL = 'assets/mock-data-json/data-notificacoes.json';

  public getNotifications(): Observable<any>{
   return this.http.get<Notification[]>(this._jsonURL);
  }
  */
}
