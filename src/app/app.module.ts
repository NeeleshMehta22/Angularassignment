import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModuleModule } from './main-module/main-module.module';

// import { UsersComponent } from './main-module/main/users/users.component';
// import { AdduserComponent } from './main-module/main/adduser/adduser.component';
// import { CreateuserComponent } from './main-module/main/createuser/createuser.component';
// import { FormsModule } from '@angular/forms';
// import { EditComponent } from './main-module/main/edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,


    // UsersComponent,
    // AdduserComponent,
    // CreateuserComponent,
    // EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModuleModule
    // HttpClientModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
