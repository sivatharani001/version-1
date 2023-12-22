import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userdetailslist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.userdetails().subscribe(((data: any)=>{
        this.userdetailslist=data;
      }))
    }

  }
