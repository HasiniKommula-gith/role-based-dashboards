import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayslipService {

 private apiUrl = 'https://role-based-dashboards-1.onrender.com/payslip';

  constructor(private http: HttpClient) {}

  getPayslip(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
