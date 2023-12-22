import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api8Service {

  constructor(private http : HttpClient) { }

  postTechnology(data : any){
    return this.http.post<any>("http://localhost:3000/technolgy",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getTechnology(){
    return this.http.get<any>("http://localhost:3000/technology")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteTechnology(id:number){
    return this.http.delete<any>("http://localhost:3000/technology/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
