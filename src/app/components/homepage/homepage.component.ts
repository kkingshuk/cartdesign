import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public demoNumber = [0,1,2,3,4,5,6,7] ;
  constructor() { }

  ngOnInit() {
  }

}
