import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SafeHouse } from '../SafeHouse';
import { CoordenateData } from '../CoordenateData';

@Injectable({
  providedIn: 'root'
})
export class SafeHouseService {

  constructor(private http: HttpClient) {}



  private _jsonURL = 'assets/mock-data-json/data-abrigo.json';

  dados : SafeHouse[] = [];

  public getSafeHouses(): Observable<any>{
      return this.http.get<SafeHouse[]>(this._jsonURL);
  }

  public getSafeHousesPlus():  SafeHouse[] {
    return this.dados;
  }

  public createSafeHouse(formData: FormData): void{

    var coordenatesURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + formData.get('number')!.toString() + formData.get('adress')!.toString() + ',Campina grande, PB&key=AIzaSyDSHgyszs0dI9KnI6hIh40-k0EjmtoIx2g'

    this.http.get<CoordenateData>(coordenatesURL).subscribe(data =>{

       var safeHouse : SafeHouse = {
        name: formData.get('name')!.toString(),
        adress: formData.get('adress')!.toString(),
        number: formData.get('number')!.toString(),
        lat: data.results[0].geometry.location.lat,
        long: data.results[0].geometry.location.lng
      }
      console.log(safeHouse)
      this.dados.push(safeHouse)
    })

  }


}
