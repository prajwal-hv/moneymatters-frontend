import { Component } from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {

  constructor(private auth: AuthService, private router: Router) {
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
