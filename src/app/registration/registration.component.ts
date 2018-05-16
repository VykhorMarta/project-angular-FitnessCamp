import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { RegistrationService } from '../services/registrationService';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {
  // countries = [
  //   {value: 'croatia-0', viewValue: 'Croatia'},
  //   {value: 'italy-1', viewValue: 'Italy'},
  //   {value: 'sweden-3', viewValue: 'Sweden'},
  //   {value: 'cappadocia-4', viewValue: 'Cappadocia'},
  //   {value: 'austria-5', viewValue: 'Austria'}
  // ];
  public onFormSubmit({ value, valid }: { value: User, valid: boolean }) {
    this.user = value;
    console.log(this.user);
    console.log("valid: " + valid);
  }

  
  private countryToGo: string[];
  private user: User;

  constructor(private http: Http) { }

  signUp() {
    console.log(this.user)
    this.http.post ('http://localhost:3000/reservation',this.user)
    .subscribe(
      res => {
        console.log(res);
      }
    );
  }

  ngOnInit() {
    this.countryToGo = ["Austria", "Cappadocia", "Sweden"];
    this.user = new User('', '', '', '', '', '', this.countryToGo[0])
    
  }

}

  
 

