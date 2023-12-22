import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { CommentService } from '../shared/comment.service';
import { CommentModel } from './comment.model';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
  formValue !: FormGroup;
  commentModelObj : CommentModel = new CommentModel();
  commentData !: any;
  constructor(private formbuilder: FormBuilder, private comment : CommentService){}

    ngOnInit(): void{
      this.formValue = this.formbuilder.group({
        name : [''],
        email : [''],
        feedback : ['']
      })
    }
    postCommentDetails(){
      this.commentModelObj.name = this.formValue.value.name;
      this.commentModelObj.email = this.formValue.value.email;
      this.commentModelObj.feedback = this.formValue.value.feedback;

      this.comment.postComment(this.commentModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Comment Submitted Successfully")
        this.formValue.reset();
      },
      err=>{
        alert("Somthing Went Worng");
      })
    }

  }
