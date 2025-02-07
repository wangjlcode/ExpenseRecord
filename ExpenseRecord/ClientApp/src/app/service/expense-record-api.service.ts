import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { ExpenseRecord, NewExpenseRecord } from '../model/expense-record';
@Injectable({ providedIn: 'root' })
export class ExpenseRecordApiService {
  private baseUrl: string;
  private http: HttpClient;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl + 'api/v1/expenserecords/';
  }
  getAllItems$(): Observable<ExpenseRecord[]> {
    return this.http.get<ExpenseRecord[]>(this.baseUrl);
  }
  addItem$(newItem: NewExpenseRecord): Observable<any>{
    return this.http.post<NewExpenseRecord>(this.baseUrl, newItem)
  }
  deleteItem$(id: string): Observable<any>{
    return this.http.delete<NewExpenseRecord>(this.baseUrl+ id)
  }
}
