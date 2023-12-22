import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api7Service {

  constructor(private http : HttpClient) { }

  postTamil(data : any){
    return this.http.post<any>("http://localhost:3000/tamil",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getTamil(){
    return this.http.get<any>("http://localhost:3000/tamil")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteTamil(id:number){
    return this.http.delete<any>("http://localhost:3000/tamil/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
