import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ApiDataService } from './services/api-data.service';
import { SharedService } from './services/shared.service';
import { FieldErrorDisplayComponent } from './components/display-error/field-error-display.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'cart', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    FieldErrorDisplayComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [ApiDataService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
