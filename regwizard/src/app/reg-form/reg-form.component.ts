import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressService } from '../services/addressService'
import { Country } from '../models/country';
import { Province } from '../models/province';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
  providers: [
    AddressService
  ]
})
export class RegFormComponent implements OnInit {

  constructor(
    private readonly addressService: AddressService
    ){}

  countries: Country[];
  provinces: Province[];

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
    console.log(register);
  }

}
