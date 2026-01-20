import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = 'https://role-based-dashboards-1.onrender.com/profile';

  constructor(private http: HttpClient) {}


  getProfileData(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl);
  }

  updateProfileData(profile: Profile): Observable<Profile> {
    const id = Number(profile.id);
    return this.http.put<Profile>(`${this.apiUrl}/${id}`, profile);
  }
}
