import { Component } from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {Expense} from '../expense.model';
import {ExpenseService} from '../../core/services/expense.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    DatePipe
  ],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {
  expenses: Expense[] = [];
   loading = false;

   page = 0;
   size=10;
   totalPages = 0;


  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.loadExpenses();
  }

  loadExpenses() {
    this.loading = true;

    this.expenseService.getExpenses(this.page, this.size).subscribe({
      next: response => {
        this.expenses = response.content;
        this.totalPages = response.totalPages;
        this.loading = false;
      },
      error: error => {
        this.loading = false;
      }
    });
  }

  nextPage(){
    if(this.page < this.totalPages-1){
      this.page++;
      this.loadExpenses()
    }
  }

  prevPage():void{
    if(this.page > 0){
      this.page--;
      this.loadExpenses();
    }
  }


}
