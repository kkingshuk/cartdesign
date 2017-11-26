import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FieldErrorDisplayComponent } from '../display-error/field-error-display.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: FormGroup;
  errDisplay: FieldErrorDisplayComponent;

  constructor(private fb: FormBuilder, private http: Http) { // <--- inject FormBuilder
    this.createForm(); 
  }

  ngOnInit() {
  }
  
  createForm() {
    this.userLogin = this.fb.group({
      email: ['', Validators.required ], 
      password: ['', [Validators.required, Validators.minLength(3)] ]
    });
  }

  onSubmit() {
    if (this.userLogin.valid) {
      const loginData = { email: this.userLogin.value.email, password: this.userLogin.value.password, 'role': 'userRole' };
      console.log(loginData);
      return this.http.post('/api/authenticate', JSON.stringify(loginData))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                  
                }
            }).
            subscribe(
              err => console.log(err)
            );
    } else {
      Object.keys(this.userLogin.controls).forEach(field => {
        console.log(field);
        const control = this.userLogin.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          //this.errDisplay(control);
        }
      });
    }
  }

  isFieldValid(field: string) {
    return !this.userLogin.get(field).valid && this.userLogin.get(field).touched;
  }
  
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
}
