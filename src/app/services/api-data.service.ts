import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

 
@Injectable()
export class ApiDataService {    

  constructor(
  private http: Http
  ) {}

  private createAuthorizationHeader(headers: Headers) {
    localStorage.setItem('authtoken', '12345');
    let authKey = JSON.parse(localStorage.getItem('authtoken'));
    //console.log(authKey);
    headers.append('auth-key', authKey);
  }

  public ENV_URL = 'http://10.245.231.103:8080';

  

  public getAllProduct(){
    return this.http.get('assets/data/products.data.json').map(
      (response) =>response.json()
    );
  }
  
  //USER SERVICES>>>>>>>>>>>>>>>>>>>>
  public userDetails(){
    //POST /v1/user/getDetails
  }
  public getUserToken(){
    //POST /v1/user/getToken
  }
  
  //CART SERVICES>>>>>>>>>>>>>>>>>>>>
  public dummygetNotifications(){ // 
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({headers: headers});
    //this.http.get(this.ENV_URL + '/v1/cart/getNotifications/2').map(
    return this.http.get('https://jsonplaceholder.typicode.com/posts/2', options).map(
      (response) =>response.json()
    );
  }
  public dummygetNotificationsPosts(){
    let param = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    let headers = new Headers();
    this.createAuthorizationHeader(headers);     
    let options = new RequestOptions({headers: headers});
    return this.http.post('https://jsonplaceholder.typicode.com/posts', param, options).map(
      (response) =>response.json()
    );
  }
  public addToCart(){
    //POST /v1/cart/add    
  }
  public getAllCartProduct(){
    //POST /v1/cart/getall
    return this.http.get('assets/data/products.data.json').map(
      (response) =>response.json()
    );
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