import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-kannada',
  templateUrl: './kannada.component.html',
  styleUrls: ['./kannada.component.css']
})
export class KannadaComponent implements OnInit {
  kannadalist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.kannada().subscribe(((data: any)=>{
        this.kannadalist=data;
      }))
    }

  }
