import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../services/api-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public demoNumber = [0,1,2,3,4,5,6,7] ;
  constructor(
    private apiSrv : ApiDataService
  ) { }

  ngOnInit() {
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
    this.apiSrv.dummygetNotificationsPosts().subscribe(
      (data) => console.log(data),//success Handler
      (error) => console.log(error),//Error Handler
      () => console.log("completed dummygetNotificationsPosts")//Complete Handler
    );
    this.apiSrv.dummygetNotifications().subscribe(
      (data) => console.log(data),//success Handler
      (error) => console.log(error),//Error Handler
      () => console.log("completed dummygetNotifications")//Complete Handler
    );
  }

}
