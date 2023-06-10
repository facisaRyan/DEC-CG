import { SafeHouse } from './../../../interfaces/SafeHouse';
import { HttpClient } from '@angular/common/http';
import { AppState } from './../../../interfaces/app-state';
import { MapService } from './../../../services/map.service';
import { SosService } from './../../../services/sos.service';
import { DataState} from './../../../enum/data-state.enum';
import { catchError, map, startWith } from 'rxjs/operators';
import { SafeHouseService } from './../../../services/safe-house.service';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MapResponse } from 'src/app/interfaces/responses/MapaResponse';
import { Loader } from '@googlemaps/js-api-loader';



@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMapComponent implements OnInit {

  apiLoaded!: Observable<boolean>;

  mapinha!: google.maps.Map

  appState$!: Observable<AppState<MapResponse>>;
  readonly DataState = DataState;

  constructor(private mapService : MapService) {}


  ngOnInit(): void {
     this.appState$ = this.mapService.mapData$.pipe(
        map(response => {
          return{ dataState: DataState.LOADED_STATE, appData : response}
        }),
        startWith({dataState: DataState.LOADING_STATE}),
        catchError((error : string) => {
          return of({dataState: DataState.ERROR_STATE, error: error})
        })
      );
  }

  loadMap(){

    let loader = new Loader({
      apiKey: 'AIzaSyDSHgyszs0dI9KnI6hIh40-k0EjmtoIx2g'
    })

    loader.load().then(()=>{
      this.mapinha = new google.maps.Map(document.getElementById("map")!,{
        center: { lat: -7.2325918, lng: -35.8952272 },
        zoom: 14,
    })

      const sosMarker = {
        path: "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
        fillColor: "red",
        fillOpacity: 1.0,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(0, 20),
      };

      this.appState$.subscribe(item => {
        const safeHouseIcon = {
          path: "M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z",
          fillColor: "green",
          fillOpacity: 1.0,
          strokeWeight: 0,
          rotation: 0,
          scale: 2,
          anchor: new google.maps.Point(0, 20),
        };

        const sosMarker = {
          path: "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
          fillColor: "red",
          fillOpacity: 1.0,
          strokeWeight: 0,
          rotation: 0,
          scale: 2,
          anchor: new google.maps.Point(0, 20),
        };

        for (let i = 0; i < item.appData?.sos.data.SoSs?.length!; i++) {
          new google.maps.Marker({
            position:  new google.maps.LatLng( item.appData?.sos.data.SoSs![i].location.lat!, item.appData?.sos.data.SoSs![i].location.longi),
            icon: sosMarker,
            map: this.mapinha,
            title: item.appData?.sos.data.SoSs![0].author.name
          })
        }

        for (let i = 0; i < item.appData?.safeHouses.data.SafeHouses?.length!; i++) {
          new google.maps.Marker({
            position:  new google.maps.LatLng( item.appData?.safeHouses.data.SafeHouses![i].location.lat!, item.appData?.safeHouses.data.SafeHouses![i].location.longi!),
            icon: safeHouseIcon,
            map: this.mapinha,
            title: item.appData?.safeHouses.data.SafeHouses![0].name
          })
        }


      })
    })
  }



}
