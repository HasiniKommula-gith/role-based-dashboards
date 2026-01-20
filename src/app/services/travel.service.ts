import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private apiUrl = 'https://role-based-dashboards-1.onrender.com/travelRequests';

  constructor(private http: HttpClient) {}

  getTravelRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTravelRequest(request: any): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }
}
