import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Api1Service } from '../shared/api1.service';
import { EducationModel } from './educationadmin.model';

@Component({
  selector: 'app-educationadmin',
  templateUrl: './educationadmin.component.html',
  styleUrls: ['./educationadmin.component.css']
})
export class EducationadminComponent implements OnInit {

  formValue !: FormGroup;
  educationModelObj : EducationModel = new EducationModel();
  educationData !: any;
  constructor(private formbuilder: FormBuilder, private api1 : Api1Service){}


    ngOnInit(): void{
      this.formValue = this.formbuilder.group({
        name : [''],
        link : [''],
        image : [''],
        description : ['']
      })
      this.getAllEducation();
    }
    postEducationDetails(){
      this.educationModelObj.name = this.formValue.value.name;
      this.educationModelObj.link = this.formValue.value.link;
      this.educationModelObj.image = this.formValue.value.image;
      this.educationModelObj.description = this.formValue.value.description;

      this.api1.postEducation(this.educationModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Education News Added Successfully")
        this.formValue.reset();
        this.getAllEducation();
      },
      err=>{
        alert("Somthing Went Worng");
      })
    }

    getAllEducation(){
      this.api1.getEducation()
      .subscribe(res=>{
        this.educationData =res;

      })
    }

    deleteEducation(row : any){
      this.api1.deleteEducation(row.id)
      .subscribe(res=>{
        alert("Education News Deleted")
        this.getAllEducation();
      })
    }

  }

