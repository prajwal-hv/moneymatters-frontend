import { Component } from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../styles/auth.css']
})
export class LoginComponent {

  username='';
  password=""
  loading=false;
  error="";

  constructor(private auth:AuthService, private router:Router) {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/expenses']);
    }
  }

  login(){
    this.loading=true;
    this.error="";

    this.auth.login(this.username,this.password).subscribe({
      next:() => this.router.navigate(['/expenses']),
      error: err => {
        this.error = err?.error?.message || "Login Failed";
        this.loading=false;
      }
    })
  }
}
