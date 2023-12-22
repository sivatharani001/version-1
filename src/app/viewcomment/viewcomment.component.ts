import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-viewcomment',
  templateUrl: './viewcomment.component.html',
  styleUrls: ['./viewcomment.component.css']
})
export class ViewcommentComponent {
  commentlist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.comment().subscribe(((data: any)=>{
        this.commentlist=data;
      }))
    }

}
