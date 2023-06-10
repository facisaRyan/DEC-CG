import { Sos } from '../Sos';
import { CustomResponse } from './CustomReponse';

export interface SosResponse {
  CustomResponse : CustomResponse;
  data : {SoSs ?: Sos[], sos?: Sos}
}
