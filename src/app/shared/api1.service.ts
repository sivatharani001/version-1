import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api1Service {

  constructor(private http : HttpClient) { }

  postEducation(data : any){
    return this.http.post<any>("http://localhost:3000/education",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEducation(){
    return this.http.get<any>("http://localhost:3000/education")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteEducation(id:number){
    return this.http.delete<any>("http://localhost:3000/education/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
