import { coursesComponent } from "./courses/courses.component";
import { JspidersComponent } from "./jspiders.components";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeComponent } from "./employee/employee.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { SimpleComponent } from "./simple/simple.component";
import { from } from "rxjs";
import { CustomDirective } from "./custom.directive";
import { Login1Component } from "./login1/login1.component";
import { ContactComponent } from "./contact/contact.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StudentsComponent } from "./students/students.component";
import { FormBuilderComponent } from "./form-builder/form-builder.component";
import { Login2Component } from "./login2/login2.component";

//to use RESTfull Api in angular first
//import httpClientModule form '@angular/common/http'
import { HttpClientModule } from "@angular/common/http";
import { PlayerComponent } from "./player/player.component";
@NgModule({
  declarations: [
    AppComponent,
    JspidersComponent, //registered in app.module.file
    coursesComponent,
    HeaderComponent,
    LoginComponent,
    EmployeeComponent,
    HomeComponent,
    PagenotfoundComponent,
    RegisterComponent,
    UsersComponent,
    SimpleComponent,
    CustomDirective,
    Login1Component,
    ContactComponent,
    StudentsComponent,
    FormBuilderComponent,
    Login2Component,
    PlayerComponent
  ], // register in app.module.file
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "player", component: PlayerComponent },
      { path: "**", component: PagenotfoundComponent }
    ]),
    HttpClientModule
  ], //modules
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
