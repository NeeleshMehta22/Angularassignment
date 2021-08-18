import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users/userservice/users.service';
import { Iusers } from '../users/modal/user.modal';
import { AdduserComponent } from '../adduser/adduser.component';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  users={
    id:'',
    firstname:'',
    middlename:'',
    lastname:'',
    email:'',
    phonenumber:'',
    role:'',
    address:'',
  }

  constructor(private router:Router,private userService:UsersService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((results)=>{
      this.getuserbyid(results);
    })
  }


  back(){
    this.router.navigateByUrl('/adduser');
  }

  oncancel(myForm:NgForm){
    this.route.queryParams.subscribe((results)=>{
      this.getuserbyid(results);
    })
  }

  updateUser(myForm:NgForm){

    this.userService.updateuser(this.users)
    this.back();
    

  }
  getuserbyid(id:any){
    this.userService.getuserbyid(id.id).subscribe((results)=>{
      this.users=results;
      // console.log(this.users);
    })
  }
  // getuser(){
  //   // this.loading=true;
  //   // this.load="Refresh"
  //   // setTimeout(() => {
  //   //   this.loading=false;
  //   // },2000);
  //   this.userService.getuser().subscribe(
  //     (results)=>{
  //       // this.loading=false;
  //       this.users=results;
  //       // console.log(this.users);
  //     },(error)=>{
  //       console.log(error.tostring);
  //       alert(error);
  //     }
  //   )
  // }




}
