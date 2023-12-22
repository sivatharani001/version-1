import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http : HttpClient) { }

  postComment(data : any){
    return this.http.post<any>("http://localhost:3000/comment",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
