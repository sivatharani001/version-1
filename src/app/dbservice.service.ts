import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private client:HttpClient) { }

  business(){
    return this.client.get("http://localhost:3000/business")
  }

  education(){
    return this.client.get("http://localhost:3000/education")
  }

  english(){
    return this.client.get("http://localhost:3000/english")
  }

  hindi(){
    return this.client.get("http://localhost:3000/hindi")
  }

  kannada(){
    return this.client.get("http://localhost:3000/kannada")
  }

  malayalam(){
    return this.client.get("http://localhost:3000/malayalam")
  }

  sports(){
    return this.client.get("http://localhost:3000/sports")
  }

  tamil(){
    return this.client.get("http://localhost:3000/tamil")
  }

  technology(){
    return this.client.get("http://localhost:3000/technology")
  }

  telugu(){
    return this.client.get("http://localhost:3000/telugu")
  }

  weather(){
    return this.client.get("http://localhost:3000/weather")
  }

  userdetails(){
    return this.client.get("http://localhost:3000/userdetails")
  }

  comment(){
    return this.client.get("http://localhost:3000/comment")
  }

}
