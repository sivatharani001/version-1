import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.css']
})
export class HindiComponent implements OnInit {
  hindilist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.hindi().subscribe(((data: any)=>{
        this.hindilist=data;
      }))
    }

  }
