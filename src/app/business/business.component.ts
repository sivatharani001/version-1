import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businesslist:any;
  constructor(private service:DbserviceService) { }
  
    ngOnInit() {
      this.service.business().subscribe(((data: any)=>{
        this.businesslist=data;
      }))
    }
  
}
