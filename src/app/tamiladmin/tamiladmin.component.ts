import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Api7Service } from '../shared/api7.service';
import { TamilModel } from './tamiladmin.model';

@Component({
  selector: 'app-tamiladmin',
  templateUrl: './tamiladmin.component.html',
  styleUrls: ['./tamiladmin.component.css']
})
export class TamiladminComponent implements OnInit {

  formValue !: FormGroup;
  tamilModelObj : TamilModel = new TamilModel();
  tamilData !: any;
  constructor(private formbuilder: FormBuilder, private api7 : Api7Service){}


    ngOnInit(): void{
      this.formValue = this.formbuilder.group({
        name : [''],
        link : [''],
        image : [''],
        description : ['']
      })
      this.getAllTamil();
    }
    postTamilDetails(){
      this.tamilModelObj.name = this.formValue.value.name;
      this.tamilModelObj.link = this.formValue.value.link;
      this.tamilModelObj.image = this.formValue.value.image;
      this.tamilModelObj.description = this.formValue.value.description;

      this.api7.postTamil(this.tamilModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Tamil Newspapaer Added Successfully")
        this.formValue.reset();
        this.getAllTamil();
      },
      err=>{
        alert("Somthing Went Worng");
      })
    }

    getAllTamil(){
      this.api7.getTamil()
      .subscribe(res=>{
        this.tamilData =res;

      })
    }

    deleteTamil(row : any){
      this.api7.deleteTamil(row.id)
      .subscribe(res=>{
        alert("Business Newspaper Deleted")
        this.getAllTamil();
      })
    }

  }
