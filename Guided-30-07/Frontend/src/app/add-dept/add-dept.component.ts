import { Component, OnInit } from '@angular/core';
import { Department } from '../common/department';
import { ManagementServiceService } from '../services/management-service.service';

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.css']
})
export class AddDeptComponent implements OnInit {

  department: Department = {
    deptno: 0,
    dname: '',
    location: ''
  }
  submitted = false;

  constructor(private depService: ManagementServiceService) { }

  ngOnInit(): void {
  }
  saveDepartment(): void {
    const data = {
      deptno: this.department.deptno,
      dname: this.department.dname,
      location: this.department.location,
    

    };
    this.depService.createDepartment(data)
    .subscribe(
      (      response: any) => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    }

    newDepartment(): void {
      this.submitted = false,
      this.department = {
        deptno: 0,
        dname:"",
        location:""
      }
    }

}
