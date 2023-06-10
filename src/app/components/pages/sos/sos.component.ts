import { SosService } from './../../../services/sos.service';
import { Component, OnInit } from '@angular/core';
import { Sos} from '../../../interfaces/Sos';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css']
})
export class SosComponent implements OnInit {

  soSs : Sos[] = [];

  constructor(private sosService : SosService) { }

  ngOnInit(): void {
    /*
    this.sosService.getSos().subscribe((data)=> {
      this.soSs = data;
    });
    */
  }

}
