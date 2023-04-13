import { Notification } from 'src/app/Notification';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(private http: HttpClient) {}

  private _jsonURL = 'assets/mock-data-json/data-notificacoes.json';

  public getNotifications(): Observable<any>{
   return this.http.get<Notification[]>(this._jsonURL);
  }

}
