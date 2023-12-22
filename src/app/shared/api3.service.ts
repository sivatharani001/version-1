import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api3Service {

  constructor(private http : HttpClient) { }

  postHindi(data : any){
    return this.http.post<any>("http://localhost:3000/hindi",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getHindi(){
    return this.http.get<any>("http://localhost:3000/hindi")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteHindi(id:number){
    return this.http.delete<any>("http://localhost:3000/hindi/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
