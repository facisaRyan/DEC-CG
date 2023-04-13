import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SosService {

  constructor(private http: HttpClient) {}

  private _jsonURL = 'assets/mock-data-json/data-socorro.json';

  public getSos(): Observable<any>{
   return this.http.get(this._jsonURL);
  }
}
