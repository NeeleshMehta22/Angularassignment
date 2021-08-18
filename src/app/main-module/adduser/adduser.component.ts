import { Component, OnInit,ViewChild} from '@angular/core';
import { Iusers } from '../users/modal/user.modal';
import { UsersService } from '../users/userservice/users.service';
import { Router,ActivatedRoute,NavigationEnd} from '@angular/router';
import {ElementRef} from '@angular/core';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  users:Iusers[]=[];
  Refresh:string="Refresh"
  loading:boolean=false;
  currentUrl:string;
  previousUrl:any;

  // @ViewChild('btnref') el:ElementRef;
  constructor(private userservice:UsersService,private router:Router,
    private route:ActivatedRoute,private el1:ElementRef ) { 
    // console.log(this.route.snapshot.paramMap.get('name'));
    // console.log(this.route.snapshot.queryParamMap.get('name'));
    // console.log(this.router.config)
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        console.log(this.previousUrl);
        if(!this.previousUrl.includes('/adduser')||this.previousUrl.includes('/user-list')){
         
          this.getuser();
        }
   
      };
    });
  }

  ngOnInit(): void {
    this.getuser();
  }

  getuser(){
    this.loading=true;
   
    setTimeout(() => {
      this.loading=false;
    },2000);
    this.userservice.getuser().subscribe(
      (results)=>{
        this.loading=false;
        this.users=results;
        // console.log(this.users);
      },(error)=>{
        console.log("error",error.tostring);
        alert(error);
      }
    )
  }

  
  
    ondelete(user:Iusers){
      this.userservice.deleteuser(user).subscribe(
        (results)=>{
          this.getuser();
          
        },(error)=>{
          console.log("error",error)
          alert(error.tostring);
          
        }
      )}

      back(){
        this.router.navigateByUrl('');
      }

      onedit(id:number){
        this.router.navigateByUrl('/edit/' + id)

      }
      btnClick1() {
        this.router.navigateByUrl('/createuser');
      };
       
      

}
