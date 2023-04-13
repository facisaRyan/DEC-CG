import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeHouse } from 'src/app/SafeHouse';

@Component({
  selector: 'app-add-safe-house-form',
  templateUrl: './add-safe-house-form.component.html',
  styleUrls: ['./add-safe-house-form.component.css']
})
export class AddSafeHouseFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<SafeHouse>()
  safeHouseForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.safeHouseForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required])
    });
  }

  get name(){
    return this.safeHouseForm.get('name')!;
  }

  get adress(){
    return this.safeHouseForm.get('adress')!;
  }

  get number(){
    return this.safeHouseForm.get('number')!;
  }


  submit(){
    if (this.safeHouseForm.invalid){
      return;
    }


    this.onSubmit.emit(this.safeHouseForm.value);
    console.log("enviou o formulario");
  }

}

