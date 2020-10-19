import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
public showdata=[];
 


constructor() { }

  ngOnInit() {

    // this.biodataservice.biodata()
    // .subscribe(Data==> this.showdata=Data)
  }

}
