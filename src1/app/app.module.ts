import { CustomDirective } from "./custom.directive";
import { coursesComponent } from "./courses/courses.component";
import { JspidersComponent } from "./jspiders.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeComponent } from "./employee/employee.component";
// import routerModule first
// it is use for routing configuration
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { SimpleComponent } from "./simple/simple.component";
import { PengaDirective } from "./penga.directive";
import { Login1Component } from "./login1/login1.component";
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    JspidersComponent,
    coursesComponent,
    HeaderComponent,
    LoginComponent,
    EmployeeComponent,
    RegisterComponent,
    PagenotfoundComponent,
    HomeComponent,
    UsersComponent,
    SimpleComponent,
    CustomDirective,
    PengaDirective,
    Login1Component,
    ContactComponent
  ], // registerr in app.module.file
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "**", component: PagenotfoundComponent } //404 page not found.
    ])
  ], // Module

  providers: [], //services
  bootstrap: [AppComponent] //root component
})
export class AppModule {}
