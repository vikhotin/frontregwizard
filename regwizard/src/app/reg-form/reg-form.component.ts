import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressService } from '../services/addressService'
import { Country } from '../models/country';

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

  ngOnInit(): void{
    this.addressService.getCities()
      .subscribe(value =>
      { 
        if (value != null)
          this.countries = value;
      }
    );
  }

  submit(register: any){
    console.log(register);
  }

}
