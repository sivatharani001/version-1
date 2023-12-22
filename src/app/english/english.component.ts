import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {
  englishlist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.english().subscribe(((data: any)=>{
        this.englishlist=data;
      }))
    }

  }
