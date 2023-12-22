import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api10Service {

  constructor(private http : HttpClient) { }

  postWeather(data : any){
    return this.http.post<any>("http://localhost:3000/weather",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getWeather(){
    return this.http.get<any>("http://localhost:3000/weather")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteWeather(id:number){
    return this.http.delete<any>("http://localhost:3000/weather/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
