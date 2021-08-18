
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:'user-list',
    component:UsersComponent,
    pathMatch:'full'
  },
  {
    path:'',
    redirectTo:'/user-list',
    pathMatch:'full'
  },
  {
    path:'adduser',
    component:AdduserComponent,
    pathMatch:'full'
  },
  {
    path:'createuser',
    component:CreateuserComponent,
    pathMatch:'full'
  },
  {
    path:'edit',
    component:EditComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
