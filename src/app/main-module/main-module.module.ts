
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';

import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    UsersComponent,
    AdduserComponent,
    CreateuserComponent,
    EditComponent
  ],
  
  imports: [
    CommonModule,
    MainModuleRoutingModule,    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class MainModuleModule { }
