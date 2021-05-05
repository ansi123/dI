import { Component } from '@angular/core';
import { DesignServiceService } from './design-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  title = 'dI';
  text:string;
  emp:any[];
  constructor(private _newservice:DesignServiceService){
  
  }

  ngOnInit(){
    this.emp=this._newservice.employees;
    this.text=this._newservice.display();
  }
}
