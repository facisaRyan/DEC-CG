import { NotificationService } from './../../../services/notification.service';
import { Component, OnInit } from '@angular/core';
import { Notification } from '../../../interfaces/Notification';
import { Observable, of} from 'rxjs';
import { DataState} from './../../../enum/data-state.enum';
import { AppState } from './../../../interfaces/app-state';
import { MapResponse } from 'src/app/interfaces/responses/MapaResponse';
import { NotificationResponse } from 'src/app/interfaces/responses/NotificationResponse';
import { catchError, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {


  appState$!: Observable<AppState<NotificationResponse>>;
  readonly DataState = DataState;

  constructor(private notificationService : NotificationService) { }

  ngOnInit(): void {
    this.appState$ = this.notificationService.notifications$.pipe(
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
