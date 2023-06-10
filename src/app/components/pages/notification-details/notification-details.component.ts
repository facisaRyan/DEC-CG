import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Notification } from '../../../interfaces/Notification';
import { Observable, of} from 'rxjs';
import { NotificationResponse } from 'src/app/interfaces/responses/NotificationResponse';
import { DataState} from './../../../enum/data-state.enum';
import { AppState } from './../../../interfaces/app-state';
import { catchError, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {

  appState$!: Observable<AppState<NotificationResponse>>;
  readonly DataState = DataState;

  constructor(private notificationService: NotificationService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    const id  = this.route.snapshot.paramMap.get('id');

    this.appState$ = this.notificationService.getOne$(id!).pipe(
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
