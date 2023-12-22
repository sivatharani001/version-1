import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Api2Service } from '../shared/api2.service';
import { EnglishModel } from './englishadmin.model';

@Component({
  selector: 'app-englishadmin',
  templateUrl: './englishadmin.component.html',
  styleUrls: ['./englishadmin.component.css']
})
export class EnglishadminComponent implements OnInit {

  formValue !: FormGroup;
  englishModelObj : EnglishModel = new EnglishModel();
  englishData !: any;
  constructor(private formbuilder: FormBuilder, private api2 : Api2Service){}

    ngOnInit(): void{
      this.formValue = this.formbuilder.group({
        name : [''],
        link : [''],
        image : [''],
        description : ['']
      })
      this.getAllEnglish();
    }
    postEnglishDetails(){
      this.englishModelObj.name = this.formValue.value.name;
      this.englishModelObj.link = this.formValue.value.link;
      this.englishModelObj.image = this.formValue.value.image;
      this.englishModelObj.description = this.formValue.value.description;

      this.api2.postEnglish(this.englishModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("English Newspaper Added Successfully")
        this.formValue.reset();
        this.getAllEnglish();
      },
      err=>{
        alert("Somthing Went Worng");
      })
    }

    getAllEnglish(){
      this.api2.getEnglish()
      .subscribe(res=>{
        this.englishData =res;
      })
    }

    deleteEnglish(row : any){
      this.api2.deleteEnglish(row.id)
      .subscribe(res=>{
        alert("English Newspaper Deleted")
        this.getAllEnglish();
      })
    }

  }
