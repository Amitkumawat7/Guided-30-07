import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/common/department';
import { ManagementServiceService } from '../services/management-service.service';
@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  departments : Department[];
  constructor(private service : ManagementServiceService) { }

  ngOnInit(): void {
    console.log(this.listOfDepartments())
  }

  listOfDepartments(){
    this.service.getAllDepartments().subscribe((data: Department[]) => {
      console.log(data)
      this.departments = data
    })
  }

}

