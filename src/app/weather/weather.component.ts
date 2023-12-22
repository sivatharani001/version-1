import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherlist:any;
  constructor(private service:DbserviceService) { }

    ngOnInit() {
      this.service.weather().subscribe(((data: any)=>{
        this.weatherlist=data;
      }))
    }

  }
