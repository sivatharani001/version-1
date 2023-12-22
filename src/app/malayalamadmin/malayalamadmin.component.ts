import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Api5Service } from '../shared/api5.service';
import { MalayalamModel } from './malayalamadmin.model';

@Component({
  selector: 'app-malayalamadmin',
  templateUrl: './malayalamadmin.component.html',
  styleUrls: ['./malayalamadmin.component.css']
})
export class MalayalamadminComponent implements OnInit {

  formValue !: FormGroup;
  malayalamModelObj : MalayalamModel = new MalayalamModel();
  malayalamData !: any;
  constructor(private formbuilder: FormBuilder, private api5 : Api5Service){}


    ngOnInit(): void{
      this.formValue = this.formbuilder.group({
        name : [''],
        link : [''],
        image : [''],
        description : ['']
      })
      this.getAllMalayalam();
    }
    postMalayalamDetails(){
      this.malayalamModelObj.name = this.formValue.value.name;
      this.malayalamModelObj.link = this.formValue.value.link;
      this.malayalamModelObj.image = this.formValue.value.image;
      this.malayalamModelObj.description = this.formValue.value.description;

      this.api5.postMalayalam(this.malayalamModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Malayalam News Added Successfully")
        this.formValue.reset();
        this.getAllMalayalam();
      },
      err=>{
        alert("Somthing Went Worng");
      })
    }

    getAllMalayalam(){
      this.api5.getMalayalam()
      .subscribe(res=>{
        this.malayalamData =res;

      })
    }

    deleteMalayalam(row : any){
      this.api5.deleteMalayalam(row.id)
      .subscribe(res=>{
        alert("Malayalam Newspaper Deleted")
        this.getAllMalayalam();
      })
    }

  }
