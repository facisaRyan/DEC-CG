import { NotificationService } from './../../../services/notification.service';
import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/Notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications : Notification[] = [];

  constructor(private notificationService : NotificationService) { }

  ngOnInit(): void {

    this.notificationService.getNotifications().subscribe((data)=> {
      this.notifications = data;
    });
  }

}
