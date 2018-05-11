import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registrationService';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {
  foods = [
    {value: 'croatia-0', viewValue: 'Croatia'},
    {value: 'italy-1', viewValue: 'Italy'},
    {value: 'sweden-3', viewValue: 'Sweden'},
    {value: 'cappadocia-4', viewValue: 'Cappadocia'},
    {value: 'austria-5', viewValue: 'Austria'}
  ];

  user: User = new User('', '', '', '', '', '', '');
  users: User [] = [];
  constructor(private regservice: RegistrationService, private router: Router) { }

  ngOnInit() {
  }

  signUp(){
    this.regservice.signUpNewUser(this.user).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Some error')
      }
    )
  }
  
}

  
 

