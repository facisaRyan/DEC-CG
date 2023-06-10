import { Location } from './Location';
export interface Sos {
  location : Location;
  author: {
    name: string;
    age: number;
    address: string;
  };
  creationDate : Date;
}
