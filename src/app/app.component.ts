import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(
  //   public userId: number,
  //   public id: string,
  //   public title: string,
  //   public body: string
  // ) { }


  
  title = 'mon-premier-projet';
}
