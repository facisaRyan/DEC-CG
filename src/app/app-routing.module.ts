import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { HomeMapComponent } from './components/pages/home-map/home-map.component';
import { NewSafeHouseComponent } from './components/pages/new-safe-house/new-safe-house.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SosComponent } from './components/pages/sos/sos.component';
import { NotificationDetailsComponent } from './components/pages/notification-details/notification-details.component';
import { ConfirmationComponent } from './components/pages/confirmation/confirmation.component';

const routes: Routes = [
  {path: '', component: HomeMapComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'notifications/:id', component: NotificationDetailsComponent},
  {path: 'addSafeHouse', component: NewSafeHouseComponent},
  {path: 'sos', component: SosComponent},
  {path: 'telaObrigado', component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
