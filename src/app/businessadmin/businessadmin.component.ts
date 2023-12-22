import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { BusinessModel } from './businessadmin.model';

@Component({
  selector: 'app-businessadmin',
  templateUrl: './businessadmin.component.html',
  styleUrls: ['./businessadmin.component.css']
})
export class BusinessadminComponent implements OnInit {

  formValue !: FormGroup;
  businessModelObj : BusinessModel = new BusinessModel();
  businessData !: any;
  constructor(private formbuilder: FormBuilder, private api : ApiService){}


    ngOnInit(): void{
      this.formValue = this.formbuilder.group({
        name : [''],
        link : [''],
        image : [''],
        description : ['']
      })
      this.getAllBusiness();
    }
    postBusinessDetails(){
      this.businessModelObj.name = this.formValue.value.name;
      this.businessModelObj.link = this.formValue.value.link;
      this.businessModelObj.image = this.formValue.value.image;
      this.businessModelObj.description = this.formValue.value.description;

      this.api.postBusiness(this.businessModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Business News Added Successfully")
        this.formValue.reset();
        this.getAllBusiness();
      },
      err=>{
        alert("Somthing Went Worng");
      })
    }

    getAllBusiness(){
      this.api.getBusiness()
      .subscribe(res=>{
        this.businessData =res;

      })
    }

    deleteBusiness(row : any){
      this.api.deleteBusiness(row.id)
      .subscribe(res=>{
        alert("Business Newspaper Deleted")
        this.getAllBusiness();
      })
    }

  }
