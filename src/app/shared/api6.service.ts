import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api6Service {

  constructor(private http : HttpClient) { }

  postSports(data : any){
    return this.http.post<any>("http://localhost:3000/sports",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getSports(){
    return this.http.get<any>("http://localhost:3000/sports")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteSports(id:number){
    return this.http.delete<any>("http://localhost:3000/sports/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
