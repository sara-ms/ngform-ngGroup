import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SarahService } from '../services/sarah.service';
import { ExempleServiceService } from '../exemple-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-formulaire-form-group',
  templateUrl: './formulaire-form-group.component.html',
  styleUrls: ['./formulaire-form-group.component.css']
})
export class FormulaireFormGroupComponent implements OnInit {
  userForm: FormGroup;
  submitted: boolean = false;
  posts;

  constructor(private ss: SarahService, private serv: ExempleServiceService) {
    var tab = {
      firstName: new FormControl('', [Validators.required, Validators.minLength(4),]),
      email: new FormControl('', [Validators.required, Validators.email]),
      numerodephone: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])

    }

    this.userForm = new FormGroup(tab);
  }

  ngOnInit() {
    this.serv.getData().subscribe(data => {
      console.log(data);
      this.posts = data;





    })

    this.serv.getDataId(5).subscribe(data => {
      console.log(data);
      this.posts = data;
    })

  }

  onSubmitForm() {
    alert(this.ss.test())
    console.log(this.userForm);
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    alert('SUCCESS!!');


  }
}