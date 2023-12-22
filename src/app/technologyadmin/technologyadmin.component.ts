import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Api8Service } from '../shared/api8.service';
import { TechnologyModel } from './technologyadmin.model';

@Component({
  selector: 'app-technologyadmin',
  templateUrl: './technologyadmin.component.html',
  styleUrls: ['./technologyadmin.component.css']
})
export class TechnologyadminComponent implements OnInit {

  formValue !: FormGroup;
  technologyModelObj : TechnologyModel = new TechnologyModel();
  technologyData !: any;
  constructor(private formbuilder: FormBuilder, private api8 : Api8Service){}


    ngOnInit(): void{
      this.formValue = this.formbuilder.group({
        name : [''],
        link : [''],
        image : [''],
        description : ['']
      })
      this.getAllTechnology();
    }
    postTechnologyDetails(){
      this.technologyModelObj.name = this.formValue.value.name;
      this.technologyModelObj.link = this.formValue.value.link;
      this.technologyModelObj.image = this.formValue.value.image;
      this.technologyModelObj.description = this.formValue.value.description;

      this.api8.postTechnology(this.technologyModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Technology News Added Successfully")
        this.formValue.reset();
        this.getAllTechnology();
      },
      err=>{
        alert("Somthing Went Worng");
      })
    }

    getAllTechnology(){
      this.api8.getTechnology()
      .subscribe(res=>{
        this.technologyData =res;

      })
    }

    deleteTechnology(row : any){
      this.api8.deleteTechnology(row.id)
      .subscribe(res=>{
        alert("Technology Newspaper Deleted")
        this.getAllTechnology();
      })
    }

  }

