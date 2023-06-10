import { Location} from './Location';
import { Person} from './Person';
export interface Notification {
  notificationId?: string;
  author: Person;
  title: string;
  description: string;
  type: string;
  statusModeration: string;
  statusProgress: string;
  creationDate: Date;
  location : Location;
}
