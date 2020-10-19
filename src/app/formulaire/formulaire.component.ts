import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html'
//   ` //   <div class="form-group"> //   <label for="usr">Name:</label>
//  //   <input type="text" class="form-control" id="usr"> // </div>
//  // <div class="form-group">
//  //   <label for="pwd">Password:</label>
//  //   <input type="password" class="form-control" id="pwd">
//  // </div>
//  // <div class="form-group">
//  //   <label for="nbre">Numéro:</label>
//  //   <input type="numero" class="form-control" id="nbre">
//  // </div>

//  // <div class="form-group">
//  //   <label for="email">Email:</label> //   <input type="email" class="form-control" id="email">
//  // </div>


// // `
,
  
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  numero: number;
  email: string = 'test@test.test';
  password: string;
  name:string

  constructor() { }
  ngOnInit() {
  }
  // // onFormSubmit(userForm:NgForm){
  
  //   // console.log(userForm);
  // }

  Submit() { 

    let obj = {
      name : this.name,
      numero : this.numero
    }
    console.log(obj);
    
}
test(){
  this.name = 'Sarah'
}

}


