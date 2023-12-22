import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technologylist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.technology().subscribe(((data: any)=>{
        this.technologylist=data;
      }))
    }

  }
