import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Api6Service } from '../shared/api6.service';
import { SportsModel } from './sportsadmin.model';

@Component({
  selector: 'app-sportsadmin',
  templateUrl: './sportsadmin.component.html',
  styleUrls: ['./sportsadmin.component.css']
})
export class SportsadminComponent implements OnInit {

  formValue !: FormGroup;
  sportsModelObj : SportsModel = new SportsModel();
  sportsData !: any;
  constructor(private formbuilder: FormBuilder, private api6 : Api6Service){}


    ngOnInit(): void{
      this.formValue = this.formbuilder.group({
        name : [''],
        link : [''],
        image : [''],
        description : ['']
      })
      this.getAllSports();
    }
    postSportsDetails(){
      this.sportsModelObj.name = this.formValue.value.name;
      this.sportsModelObj.link = this.formValue.value.link;
      this.sportsModelObj.image = this.formValue.value.image;
      this.sportsModelObj.description = this.formValue.value.description;

      this.api6.postSports(this.sportsModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Sports News Added Successfully")
        this.formValue.reset();
        this.getAllSports();
      },
      err=>{
        alert("Somthing Went Worng");
      })
    }

    getAllSports(){
      this.api6.getSports()
      .subscribe(res=>{
        this.sportsData =res;

      })
    }

    deleteSports(row : any){
      this.api6.deleteSports(row.id)
      .subscribe(res=>{
        alert("Sports Newspaper Deleted")
        this.getAllSports();
      })
    }

  }
