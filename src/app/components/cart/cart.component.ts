import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartForm: FormGroup;
  couponForm: FormGroup;

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.cartForm = this.fb.group({});
    this.couponForm = this.fb.group({});
  }

  submitCart() {

  }

  submitCoupon() {
    
  }

}