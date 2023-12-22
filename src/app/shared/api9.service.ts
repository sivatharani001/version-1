import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api9Service {

  constructor(private http : HttpClient) { }

  postTelugu(data : any){
    return this.http.post<any>("http://localhost:3000/telugu",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getTelugu(){
    return this.http.get<any>("http://localhost:3000/telugu")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteTelugu(id:number){
    return this.http.delete<any>("http://localhost:3000/telugu/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
