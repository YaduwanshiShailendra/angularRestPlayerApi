import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeComponent } from "./employee/employee.component";

//import routerModule first
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UsersComponent } from "./users/users.component";
import { SimpleComponent } from "./simple/simple.component";
import { CustomDirective } from "./custom.directive";
import { HeaderComponent } from "./header/header.component";
import { Login1Component } from "./login1/login1.component";
import { ContactComponent } from './contact/contact.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { StudentsComponent } from './students/students.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { Login2Component } from './login2/login2.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    RegisterComponent,
    HomeComponent,
    PagenotfoundComponent,
    UsersComponent,
    SimpleComponent,
    CustomDirective,
    HeaderComponent,
    Login1Component,
    ContactComponent,
    ReactiveformComponent,
    StudentsComponent,
    FormBuilderComponent,
    Login2Component
  ], //register in app.module.file
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "**", component: PagenotfoundComponent }
    ])
  ], //module //all modules registered in imports array
  providers: [],
  bootstrap: [AppComponent] //To register root component use bootstrap array
})
export class AppModule {}
