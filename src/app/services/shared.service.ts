import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ApiDataService } from '../services/api-data.service';

@Injectable()
export class SharedService {

  constructor(
    private apiSrv: ApiDataService
  ){
    this.apiSrv = apiSrv;
  }

  private noOfCartItems = new BehaviorSubject<number>(0);
  currentOfCartItems = this.noOfCartItems.asObservable();
  updateNoOfCartItems(){
    this.apiSrv.getAllCartProduct().subscribe(
      data => this.changeCartItems(data.allproducts.length),
      (error) => console.log(error),//Error Handler
      () => console.log("completed getNotifications")//Complete Handler
    );
  }
  changeCartItems(noOfItems: number) {
    this.noOfCartItems.next(noOfItems);
  }

  

}
