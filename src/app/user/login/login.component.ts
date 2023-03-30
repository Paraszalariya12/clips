import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModule } from 'src/app/Model/login/login.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  objmodel: LoginModule = {
    username: '',
    password: '',
  };
  ngOnInit(): void {}
  ValidateCredentials() {
    console.log(this.objmodel);
  }
}
