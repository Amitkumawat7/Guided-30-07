import { Component, OnInit } from '@angular/core';
import { Employee } from '../common/employee';
import { ManagementServiceService } from '../services/management-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees :Employee[];
  constructor(private empService : ManagementServiceService) { }

 
  ngOnInit(): void {
    console.log(this.getAllEmployees())
  }

  getAllEmployees(){
    this.empService. getAllEmployees().subscribe((data: Employee[])  => { 
      console.log(data)
    this.employees=data})
    
  }

}
