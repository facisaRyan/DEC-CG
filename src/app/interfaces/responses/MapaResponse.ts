import { SafeHouseResponse } from './SafeHouseResponse';
import { SosResponse } from './SosResponse';

export interface MapResponse {
  safeHouses: SafeHouseResponse
  sos: SosResponse
}
