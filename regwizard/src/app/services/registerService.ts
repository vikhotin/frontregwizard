import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environment";

@Injectable()
export class RegisterService {

    private readonly apiUrl = environment.apiUrl;

    constructor(
        private readonly http: HttpClient
    ){}
    
    postUser(user: Object){
        return this.http.post<any>(
            `${this.apiUrl}/user`,
            user
        );
    }
}