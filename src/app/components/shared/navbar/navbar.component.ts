import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../../services/api-data.service';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentOfCartItems:number;
  constructor(
    private apiSrv : ApiDataService,
    private shrSrv : SharedService
  ) { }

  ngOnInit() {
    this.shrSrv.currentOfCartItems.subscribe(noOfItems => this.currentOfCartItems = noOfItems);
    this.shrSrv.updateNoOfCartItems();
  }

}
