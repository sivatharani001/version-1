import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postBusiness(data : any){
    return this.http.post<any>("http://localhost:3000/business",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getBusiness(){
    return this.http.get<any>("http://localhost:3000/business")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteBusiness(id:number){
    return this.http.delete<any>("http://localhost:3000/business/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
