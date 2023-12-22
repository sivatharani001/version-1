import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-malayalam',
  templateUrl: './malayalam.component.html',
  styleUrls: ['./malayalam.component.css']
})
export class MalayalamComponent implements OnInit {
  malayalamlist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.malayalam().subscribe(((data: any)=>{
        this.malayalamlist=data;
      }))
    }

  }
