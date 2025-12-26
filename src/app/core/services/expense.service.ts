import { Injectable } from '@angular/core';
import {Expense} from '../../expenses/expense.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private readonly API="http://localhost:8080/api/expenses";

  constructor(private http:HttpClient) { }

  getExpenses(page:number, size:number): Observable<any>{
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get(this.API, {params})
  }
  createExpense(payload:any){
    return this.http.post(this.API, payload);

  }

}
