import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(3),
  ]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(100),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$'
    ),
  ]);
  confirm_password = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$'
    ),
  ]);
  phonenumber = new FormControl('', [Validators.required]);

  objregistration = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phonenumber: this.phonenumber,
  });

  AlertBGcolor: string = '';
  Alertmessage: string = '';
  Alertshow = false;

  constructor() {}

  ngOnInit(): void {}

  submitRegister(){
    this.Alertshow=true;
    this.Alertmessage="Wait.!! Your Account is Creating..!!"
    this.AlertBGcolor='blue'
  }
}
