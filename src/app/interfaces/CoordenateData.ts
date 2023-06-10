export interface CoordenateData {
  results : [{
    adress_components: [{}];
    formatted_address: string;
    geometry : {
      location : {
        lat : string;
        lng : string;
      }
      location_type: string;
      viewport : {
        notheast : {
          lat : string;
          lng : string;
        };
        southwest : {
          lat : string;
          lng : string;
        }
      }
    };
    partial_match : boolean;
    place_id : string;
    types: []
  }];
  status : string;
}
