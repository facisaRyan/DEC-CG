import { Location } from './Location';
export interface Sos {
  location : Location;
  author: {
    name: string;
    age: number;
    adress: string;
  };
  creationDate : Date;
}
