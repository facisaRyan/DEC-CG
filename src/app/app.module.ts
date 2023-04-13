import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { HomeMapComponent } from './components/pages/home-map/home-map.component';
import { NewSafeHouseComponent } from './components/pages/new-safe-house/new-safe-house.component';
import { AddSafeHouseFormComponent } from './components/add-safe-house-form/add-safe-house-form.component';
import { SosComponent } from './components/pages/sos/sos.component';
import { NotificationDetailsComponent } from './components/pages/notification-details/notification-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmationComponent } from './components/pages/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotificationsComponent,
    HomeMapComponent,
    NewSafeHouseComponent,
    AddSafeHouseFormComponent,
    SosComponent,
    NotificationDetailsComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
