import { Notification } from '../Notification';
import { CustomResponse } from './CustomReponse';

export interface NotificationResponse {
  CustomResponse : CustomResponse;
  data : {Notifications?: Notification[], Notification?: Notification}
}
