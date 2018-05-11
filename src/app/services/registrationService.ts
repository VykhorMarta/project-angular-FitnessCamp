import { User } from "../models/user.model"
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import'rxjs/';


@Injectable()
export class RegistrationService {
    constructor(private http: Http){

    }

createHeaders(headers: Headers){
    headers.append('Accept', 'application/json') 
    headers.append('Access-Control-Allow-Origin', '*')
}

signUpNewUser(user: any) {
    return this.http.post("http://192.168.0.157:8080/user/register", user);
}



    private users: User[] = [];

    
        addEployer(user: User) {
            this.users.push(user);
        }

       


}