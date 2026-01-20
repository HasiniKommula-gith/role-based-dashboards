import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './components/register/register.component';



export const routes: Routes = [
    
   
  
  { path:'',component:RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  // Lazy loaded feature modules
  { 
    path: 'dashboard', 
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  { 
    path: 'hr-dashboard', 
    loadComponent: () => import('./hr-components/hr-dashboard/hr-dashboard.component').then(m => m.HrDashboardComponent)
  },
  { 
    path: 'profile', 
    loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent)
  },
  { 
    path: 'leave-management', 
    loadComponent: () => import('./components/leave-management/leave-management.component').then(m => m.LeaveManagementComponent)
  },
  { 
    path: 'payslip', 
    loadComponent: () => import('./components/payslip/payslip.component').then(m => m.PayslipComponent)
  },
  { 
    path: 'performance', 
    loadComponent: () => import('./components/performance/performance.component').then(m => m.PerformanceComponent)
  },
  { 
    path: 'training', 
    loadComponent: () => import('./components/training/training.component').then(m => m.TrainingComponent)
  },
  { 
    path: 'recruitment', 
    loadComponent: () => import('./components/recruitment/recruitment.component').then(m => m.RecruitmentComponent)
  },
  { 
    path: 'travelrequisition', 
    loadComponent: () => import('./components/travelrequisition/travelrequisition.component').then(m => m.TravelRequisitionComponent)
  },
  { 
    path: 'employee-loan', 
    loadComponent: () => import('./components/employee-loan/employee-loan.component').then(m => m.EmployeeLoanComponent)
  },
  { 
    path: 'resignation', 
    loadComponent: () => import('./components/employee-resignation/employee-resignation.component').then(m => m.EmployeeResignationComponent)
  },
  { 
    path: 'leave-approvals', 
    loadComponent: () => import('./hr-components/leave-approval/leave-approval.component').then(m => m.LeaveApprovalComponent)
  },
  { 
    path: 'travel-approvals', 
    loadComponent: () => import('./hr-components/travel-approval/travel-approval.component').then(m => m.TravelApprovalComponent)
  },
  { 
    path: 'sidebar', 
    loadComponent: () => import('./components/sidebar/sidebar.component').then(m => m.SidebarComponent)
  },
  { 
    path: 'resignation-approvals', 
    loadComponent: () => import('./hr-components/resignation-approval/resignation-approval.component').then(m => m.ResignationApprovalComponent)
  },
  { 
    path: 'loan-approvals', 
    loadComponent: () => import('./hr-components/loan-approvals/loan-approvals.component').then(m => m.LoanApprovalsComponent)
  }

 

  

]
