import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from "src/environment";
import { Country } from '../models/country';
import { Province } from '../models/province';

@Injectable()
export class AddressService {
    private readonly apiUrl = environment.apiUrl;

    constructor(
        private readonly http: HttpClient
    ){}

    getCities() : Observable<Country[]>{
        return this.http.get<Country[]>(
            `${this.apiUrl}/cities`
        );
    }

    getProvinces(cityId: number) : Observable<Province[]>{
        return this.http.get<Province[]>(
            `${this.apiUrl}/cities/${cityId}/provinces`
        )
    }
}