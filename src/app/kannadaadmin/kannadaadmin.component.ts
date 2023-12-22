import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Api4Service } from '../shared/api4.service';
import { KannadaModel } from './kannadaadmin.model';

@Component({
  selector: 'app-kannadaadmin',
  templateUrl: './kannadaadmin.component.html',
  styleUrls: ['./kannadaadmin.component.css']
})
export class KannadaadminComponent implements OnInit {

  formValue !: FormGroup;
  kannadaModelObj : KannadaModel = new KannadaModel();
  kannadaData !: any;
  constructor(private formbuilder: FormBuilder, private api4 : Api4Service){}

    ngOnInit(): void{
      this.formValue = this.formbuilder.group({
        name : [''],
        link : [''],
        image : [''],
        description : ['']
      })
      this.getAllKannada();
    }
    postKannadaDetails(){
      this.kannadaModelObj.name = this.formValue.value.name;
      this.kannadaModelObj.link = this.formValue.value.link;
      this.kannadaModelObj.image = this.formValue.value.image;
      this.kannadaModelObj.description = this.formValue.value.description;

      this.api4.postKannada(this.kannadaModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Kannada Newspaper Added Successfully")
        this.formValue.reset();
        this.getAllKannada();
      },
      err=>{
        alert("Somthing Went Worng");
      })
    }

    getAllKannada(){
      this.api4.getKannada()
      // .subscribe(res => {
        // this.kannadaData =res;
      // })
    }

    deleteKannada(row : any){
      this.api4.deleteKannada(row.id)
      .subscribe(res=>{
        alert("English Newspaper Deleted")
        this.getAllKannada();
      })
    }

  }
