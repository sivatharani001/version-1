import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Api10Service } from '../shared/api10.service';
import { WeatherModel } from './weatheradmin.model';

@Component({
  selector: 'app-weatheradmin',
  templateUrl: './weatheradmin.component.html',
  styleUrls: ['./weatheradmin.component.css']
})
export class WeatheradminComponent implements OnInit {

  formValue !: FormGroup;
  weatherModelObj : WeatherModel = new WeatherModel();
  weatherData !: any;
  constructor(private formbuilder: FormBuilder, private api10 : Api10Service){}


    ngOnInit(): void{
      this.formValue = this.formbuilder.group({
        name : [''],
        link : [''],
        image : [''],
        description : ['']
      })
      this.getAllWeather();
    }
    postWeatherDetails(){
      this.weatherModelObj.name = this.formValue.value.name;
      this.weatherModelObj.link = this.formValue.value.link;
      this.weatherModelObj.image = this.formValue.value.image;
      this.weatherModelObj.description = this.formValue.value.description;

      this.api10.postWeather(this.weatherModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Weather News Added Successfully")
        this.formValue.reset();
        this.getAllWeather();
      },
      err=>{
        alert("Somthing Went Wrong");
      })
    }

    getAllWeather(){
      this.api10.getWeather()
      .subscribe(res=>{
        this.weatherData =res;

      })
    }

    deleteWeather(row : any){
      this.api10.deleteWeather(row.id)
      .subscribe(res=>{
        alert("Weather Newspaper Deleted")
        this.getAllWeather();
      })
    }

  }

