import { SafeHouse } from '../SafeHouse';
import { CustomResponse } from './CustomReponse';

export interface SafeHouseResponse {
  CustomResponse : CustomResponse;
  data : {SafeHouses ?: SafeHouse[], safeHouse?: SafeHouse}
}
