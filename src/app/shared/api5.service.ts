import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api5Service {

  constructor(private http : HttpClient) { }

  postMalayalam(data : any){
    return this.http.post<any>("http://localhost:3000/malayalam",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getMalayalam(){
    return this.http.get<any>("http://localhost:3000/malayalam")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteMalayalam(id:number){
    return this.http.delete<any>("http://localhost:3000/malayalam/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
