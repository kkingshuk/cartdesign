import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class ApiDataService {
  constructor(
  private http: Http
  ) { }
  public ENV_URL = 'http://10.245.231.103:8080';
  
  //USER SERVICES>>>>>>>>>>>>>>>>>>>>
  public userDetails(){
    //POST /v1/user/getDetails
  }
  public getUserToken(){
    //POST /v1/user/getToken
  }
  
  //CART SERVICES>>>>>>>>>>>>>>>>>>>>
  public getNotifications(){ // 
    //this.http.get(this.ENV_URL + '/v1/cart/getNotifications/2').map(
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').map(
      (response) =>response.json()
    ).subscribe(
      (data) => console.log(data)
    )
  }
  public addToCart(){
    //POST /v1/cart/add
  }
  public getAllCartProduct(){
    //POST /v1/cart/getall
  }
  public removeCartProduct(){
    //POST /v1/cart/remove/{productId}
  }
  public repriceCartProduct(){
    //POST /v1/cart/reprice
  }
  public addWishlistProduct(){
    //POST /v1/cart/wishlist/addProduct
  } 
  public createWishlist(){
    //GET /v1/cart/wishlist/create/{name}/{userId}
  }
  public getAllWishlist(){
    //GET /v1/cart/wishlist/getAll/{userId}
  }
  public getAllWishlistProduct(){
    //GET /v1/cart/wishlist/getAll/{wishlistId}/{userId}
  }
  public MoveToCart(){
    //GET /v1/cart/wishlist/moveToCart/{wishlistId}/{userId}
  }
  public RemoveFromWishlist(){
    //GET /v1/cart/wishlist/removeProduct/{wishlistId}/{productId}/{userId}
  }
}