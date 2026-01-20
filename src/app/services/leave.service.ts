import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leave } from '../models/leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private apiUrl = 'https://role-based-dashboards-1.onrender.com/leaveRequests';

  constructor(private http: HttpClient) {}

 
  getLeaves(): Observable<Leave[]> {
    return this.http.get<Leave[]>(this.apiUrl);
  }

  addLeave(leave: Leave): Observable<Leave> {
    return this.http.post<Leave>(this.apiUrl, leave);
  }

 
  updateLeaveStatus(id: number, status: string): Observable<Leave> {
    return this.http.patch<Leave>(`${this.apiUrl}/${id}`, { status });
  }
}


