import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-telugu',
  templateUrl: './telugu.component.html',
  styleUrls: ['./telugu.component.css']
})
export class TeluguComponent implements OnInit {
  telugulist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.telugu().subscribe(((data: any)=>{
        this.telugulist=data;
      }))
    }

  }
