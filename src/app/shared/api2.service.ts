import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api2Service {

  constructor(private http : HttpClient) { }

  postEnglish(data : any){
    return this.http.post<any>("http://localhost:3000/english",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEnglish(){
    return this.http.get<any>("http://localhost:3000/english")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteEnglish(id:number){
    return this.http.delete<any>("http://localhost:3000/english/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
