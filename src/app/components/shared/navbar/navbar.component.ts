import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../../services/api-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentOfCartItems:number;
  constructor(
    private apiSrv : ApiDataService
  ) { }

  ngOnInit() {
    this.apiSrv.currentOfCartItems.subscribe(noOfItems => this.currentOfCartItems = noOfItems);
  }

}
