import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sportslist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.sports().subscribe(((data: any)=>{
        this.sportslist=data;
      }))
    }

  }
