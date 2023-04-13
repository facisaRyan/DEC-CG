import { SafeHouseService } from './../../../services/safe-house.service';
import { Component, OnInit } from '@angular/core';
import { SafeHouse } from 'src/app/SafeHouse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-safe-house',
  templateUrl: './new-safe-house.component.html',
  styleUrls: ['./new-safe-house.component.css']
})
export class NewSafeHouseComponent implements OnInit {

  constructor( private router : Router, private safeHouseService : SafeHouseService ) { }

  ngOnInit(): void {
  }

  async createHandler(safeHouse : SafeHouse){
    console.log("cheguei aqui")
    const formData = new FormData();

    formData.append('name', safeHouse.name);
    formData.append('adress',safeHouse.adress);
    formData.append('number', safeHouse.number);

    await this.safeHouseService.createSafeHouse(formData);
    this.router.navigate(['/telaObrigado'])
  }
}
