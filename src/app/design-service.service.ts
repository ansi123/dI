import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignServiceService {
 employees: any[];
  constructor() {
    this.employees=[
      {
        empcode:'001',name:'mohit'
      },
      {
        empcode:'002',name:'singhal'
      }
    ];
   }

  display(){
    return "Hello World";
  }
}
