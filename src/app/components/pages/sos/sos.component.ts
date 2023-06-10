import { SosService } from './../../../services/sos.service';
import { Component, OnInit } from '@angular/core';
import { Sos} from '../../../interfaces/Sos';
import { catchError, map, startWith } from 'rxjs/operators';
import { Observable, of} from 'rxjs';
import { DataState} from './../../../enum/data-state.enum';
import { AppState } from './../../../interfaces/app-state';
import { SosResponse } from 'src/app/interfaces/responses/SosResponse';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css']
})
export class SosComponent implements OnInit {

  appState$!: Observable<AppState<SosResponse>>;
  readonly DataState = DataState;

  constructor(private sosService : SosService) { }

  ngOnInit(): void {
    this.appState$ = this.sosService.soss$.pipe(
      map(response => {
        return{ dataState: DataState.LOADED_STATE, appData : response}
      }),
      startWith({dataState: DataState.LOADING_STATE}),
      catchError((error : string) => {
        return of({dataState: DataState.ERROR_STATE, error: error})
      })
    );
  }

}
