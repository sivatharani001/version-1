import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Api9Service } from '../shared/api9.service';
import { TeluguModel } from './teluguadmin.model';

@Component({
  selector: 'app-teluguadmin',
  templateUrl: './teluguadmin.component.html',
  styleUrls: ['./teluguadmin.component.css']
})
export class TeluguadminComponent implements OnInit {

  formValue !: FormGroup;
  teluguModelObj : TeluguModel = new TeluguModel();
  teluguData !: any;
  constructor(private formbuilder: FormBuilder, private api9 : Api9Service){}


    ngOnInit(): void{
      this.formValue = this.formbuilder.group({
        name : [''],
        link : [''],
        image : [''],
        description : ['']
      })
      this.getAllTelugu();
    }
    postTeluguDetails(){
      this.teluguModelObj.name = this.formValue.value.name;
      this.teluguModelObj.link = this.formValue.value.link;
      this.teluguModelObj.image = this.formValue.value.image;
      this.teluguModelObj.description = this.formValue.value.description;

      this.api9.postTelugu(this.teluguModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Telugu Newspaper Added Successfully")
        this.formValue.reset();
        this.getAllTelugu();
      },
      err=>{
        alert("Somthing Went Wrong");
      })
    }

    getAllTelugu(){
      this.api9.getTelugu()
      .subscribe(res=>{
        this.teluguData =res;

      })
    }

    deleteTelugu(row : any){
      this.api9.deleteTelugu(row.id)
      .subscribe(res=>{
        alert("Telugu Newspaper Deleted")
        this.getAllTelugu();
      })
    }

  }
