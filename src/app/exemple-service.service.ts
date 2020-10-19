import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExempleServiceService {

  constructor(private http:HttpClient) { }
getData(){
  return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1');
  
  }
  getDataId(id){
  return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id);
  
  }

}

