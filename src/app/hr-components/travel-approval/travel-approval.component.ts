import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-travel-approval',
  imports:[CommonModule,FormsModule,SidebarComponent],
  templateUrl: './travel-approval.component.html',
  styleUrls: ['./travel-approval.component.css']
})
export class TravelApprovalComponent implements OnInit {
  travelRequests: any[] = [];

  constructor(private http: HttpClient,private profileService : ProfileService) {}

  ngOnInit() {
    this.getTravelRequests();
  }

  getTravelRequests() {
    this.http.get<any[]>('https://role-based-dashboards-1.onrender.com/travelRequests')
      .subscribe(data => this.travelRequests = data);
  }

  updateStatus(id: number, status: string) {
    this.http.patch(`https://role-based-dashboards-1.onrender.com/travelRequests/${id}`, { status })
      .subscribe(() => {
        alert(`travel request ${status}`);
        this.getTravelRequests(); 
      });
  }
}
