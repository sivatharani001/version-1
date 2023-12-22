import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  commentlist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.comment().subscribe(((data: any)=>{
        this.commentlist=data;
      }))
    }

}
