import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationlist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.education().subscribe(((data: any)=>{
        this.educationlist=data;
      }))
    }

  }
