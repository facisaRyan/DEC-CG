import { HttpClient } from '@angular/common/http';
import { SafeHouseService } from './../../../services/safe-house.service';
import { Component, OnInit } from '@angular/core';
import { SafeHouse } from '../../../interfaces/SafeHouse';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataState} from './../../../enum/data-state.enum';
import { NgForm } from '@angular/forms';
import { SafeHouseResponse } from 'src/app/interfaces/responses/SafeHouseResponse';
import { AppState } from './../../../interfaces/app-state';
import { catchError, map, startWith } from 'rxjs/operators';
import { NewSafeHouse } from 'src/app/interfaces/form';
import { CoordenateData } from 'src/app/interfaces/CoordenateData';

@Component({
  selector: 'app-new-safe-house',
  templateUrl: './new-safe-house.component.html',
  styleUrls: ['./new-safe-house.component.css']
})
export class NewSafeHouseComponent implements OnInit {

  appState$!: Observable<AppState<SafeHouseResponse>>;
  readonly DataState = DataState;


  constructor( private router : Router, private safeHouseService : SafeHouseService,
    private http : HttpClient ) { }

  ngOnInit(): void {
  }


  saveSafeHouse(safeHouseForm: NgForm) : void {


    let formValue: NewSafeHouse;
    formValue = safeHouseForm.value

    let safeHouse : SafeHouse = {
      name : '',
      location : {
        lat: 0,
        longi: 0,
        address: '',
        number: 0,
      }
    }

    var coordenatesURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + formValue.number!.toString() + formValue.adress!.toString() + ',Campina grande, PB&key=AIzaSyDSHgyszs0dI9KnI6hIh40-k0EjmtoIx2g'

    this.http.get<CoordenateData>(coordenatesURL).subscribe(data =>{
      console.log(Number(data.results[0].geometry.location.lat))
        safeHouse.location.lat = Number(data.results[0].geometry.location.lat)
        safeHouse.location.longi = Number(data.results[0].geometry.location.lng)
        safeHouse.name = formValue.name
        safeHouse.location.address = formValue.adress
        safeHouse.location.number = formValue.number

        this.appState$ = this.safeHouseService.save$(safeHouse).pipe(
          map(response => {
            return{ dataState: DataState.LOADED_STATE, appData : response}
          }),
          startWith({dataState: DataState.LOADING_STATE}),
          catchError((error : string) => {
            return of({dataState: DataState.ERROR_STATE, error: error})
          })
        );
   })

  }

}
