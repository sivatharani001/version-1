import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api4Service {
  getKannada() {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

  postKannada(data : any){
    return this.http.post<any>("http://localhost:3000/kannada",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getKannad(){
    return this.http.get<any>("http://localhost:3000/kannada")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteKannada(id:number){
    return this.http.delete<any>("http://localhost:3000/kannada/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
