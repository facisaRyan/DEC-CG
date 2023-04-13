import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Notification } from 'src/app/Notification';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {

  notifications : Notification[] = [];
  notification?: Notification;

  constructor(private notificationService: NotificationService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id  = this.route.snapshot.paramMap.get('id');
    this.notificationService.getNotifications().subscribe((notifications) => {
      this.notifications = notifications;
      this.notification = this.notifications.find(notifications => notifications.notificationId == id);
    });

  }

}
