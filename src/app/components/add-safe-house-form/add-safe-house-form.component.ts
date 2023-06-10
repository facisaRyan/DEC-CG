import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeHouse } from '../../interfaces/SafeHouse';

@Component({
  selector: 'app-add-safe-house-form',
  templateUrl: './add-safe-house-form.component.html',
  styleUrls: ['./add-safe-house-form.component.css']
})
export class AddSafeHouseFormComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}

