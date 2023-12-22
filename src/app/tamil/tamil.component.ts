import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-tamil',
  templateUrl: './tamil.component.html',
  styleUrls: ['./tamil.component.css']
})
export class TamilComponent implements OnInit {
  tamillist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.tamil().subscribe(((data: any)=>{
        this.tamillist=data;
      }))
    }

  }
