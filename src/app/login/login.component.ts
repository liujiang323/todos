import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'jiangliu'
  password = ''
  errorMessage = 'Invalid Credentials'
  isValidLogin = false

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  handleLogin() {
    if (this.username === 'jiangliu' && this.password === 'dummy') {
      this.isValidLogin = false
      this.router.navigate(['welcome', this.username])
    }else {
      this.isValidLogin = true
    }
  }

}
