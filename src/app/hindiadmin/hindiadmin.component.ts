import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Api3Service } from '../shared/api3.service';
import { HindiModel } from './hindiadmin.model';

@Component({
  selector: 'app-hindiadmin',
  templateUrl: './hindiadmin.component.html',
  styleUrls: ['./hindiadmin.component.css']
})
export class HindiadminComponent implements OnInit {

  formValue !: FormGroup;
  hindiModelObj : HindiModel = new HindiModel();
  hindiData !: any;
  constructor(private formbuilder: FormBuilder, private api3 : Api3Service){}


    ngOnInit(): void{
      this.formValue = this.formbuilder.group({
        name : [''],
        link : [''],
        image : [''],
        description : ['']
      })
      this.getAllHindi();
    }
    postHindiDetails(){
      this.hindiModelObj.name = this.formValue.value.name;
      this.hindiModelObj.link = this.formValue.value.link;
      this.hindiModelObj.image = this.formValue.value.image;
      this.hindiModelObj.description = this.formValue.value.description;

      this.api3.postHindi(this.hindiModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Hindi Newspaper Added Successfully")
        this.formValue.reset();
        this.getAllHindi();
      },
      err=>{
        alert("Somthing Went Worng");
      })
    }

    getAllHindi(){
      this.api3.getHindi()
      .subscribe(res=>{
        this.hindiData =res;

      })
    }

    deleteHindi(row : any){
      this.api3.deleteHindi(row.id)
      .subscribe(res=>{
        alert("Hindi Newspaper Deleted")
        this.getAllHindi();
      })
    }

  }
