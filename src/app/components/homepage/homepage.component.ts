import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../services/api-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  allProducts : any[];
  currentOfCartItems:number;
  constructor(
    private apiSrv : ApiDataService
  ) { }

  ngOnInit() {
    this.apiSrv.currentOfCartItems.subscribe(noOfItems => this.currentOfCartItems = noOfItems);
    this.apiSrv.getAllCartProduct().subscribe(
      data => this.apiSrv.changeCartItems(data.allproducts.length),
      (error) => console.log(error),//Error Handler
      () => console.log("completed getNotifications")//Complete Handler
    );
    //this.apiSrv.changeCartItems(this.currentOfCartItems);
    // this.apiSrv.getNotifications().subscribe(
    //   (data) => console.log(data),//success Handler
    //   (error) => console.log(error),//Error Handler
    //   () => console.log("completed getNotifications")//Complete Handler
    // );
    // this.apiSrv.getNotificationsPosts().subscribe(
    //   (data) => console.log(data),//success Handler
    //   (error) => console.log(error),//Error Handler
    //   () => console.log("completed getNotificationsPosts")//Complete Handler
    // );
    // this.apiSrv.dummygetNotificationsPosts().subscribe(
    //   (data) => console.log(data),//success Handler
    //   (error) => console.log(error),//Error Handler
    //   () => console.log("completed dummygetNotificationsPosts")//Complete Handler
    // );
    // this.apiSrv.dummygetNotifications().subscribe(
    //   (data) => console.log(data),//success Handler
    //   (error) => console.log(error),//Error Handler
    //   () => console.log("completed dummygetNotifications")//Complete Handler
    // );
    this.apiSrv.getAllProduct().subscribe(
      data => this.allProducts = data.allproducts,
      (error) => console.log(error),//Error Handler
      () => console.log("completed dummygetNotifications")//Complete Handler
    )
    
  }
  public removeFromCart(product){
    //console.log(product);
    this.apiSrv.changeCartItems(this.currentOfCartItems-1);
  }
  public addToCart(product){
    //console.log(product);
    this.apiSrv.changeCartItems(this.currentOfCartItems+1);
  }
  public addToWishlist(product){
    console.log(product);
  }

}
