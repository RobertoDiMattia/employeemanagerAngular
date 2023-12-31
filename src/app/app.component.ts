import { Component, OnInit } from '@angular/core';
import { EmployeeService} from './employeeService';
import { Employee } from './employee';
import { HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'employeemanagerapp';
  
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
      this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }
}