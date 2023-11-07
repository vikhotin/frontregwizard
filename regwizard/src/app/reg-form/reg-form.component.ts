import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressService } from '../services/addressService'
import { Country } from '../models/country';
import { Province } from '../models/province';
import { RegisterService } from '../services/registerService';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
  providers: [
    AddressService,
    RegisterService
  ]
})
export class RegFormComponent implements OnInit {

  constructor(
    private readonly addressService: AddressService,
    private readonly registerService: RegisterService
    ){}

  countries: Country[];
  provinces: Province[];
  error: boolean;

  ngOnInit(): void{
    this.addressService.getCities()
      .subscribe(value => {
        if (value != null)
          this.countries = value;
      }
    );
  }

  onChange(newVal: any){
    this.addressService.getProvinces(newVal)
      .subscribe(value => {
        if (value != null)
          this.provinces = value
        else
          this.provinces = []
      })
  }

  submit(register: any){
    this.registerService.postUser(register.value)
      .subscribe({
        next: _ => {
          this.error = false;
        },
        error: value => {
          if (value.status != 201)
            this.error = true;
        }
      }
    );
  }

}
