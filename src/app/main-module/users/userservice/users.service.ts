import { Injectable } from '@angular/core';
import {Iroutes} from '../modal/routes.modal'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Iusers } from '../modal/user.modal';
import { Observable , throwError} from 'rxjs';
import {catchError,retry} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService implements Iroutes{
  private baseurl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  // private Errorhandle(error:HttpErrorResponse){

  // }




  createuser(user:Iusers):Observable<Iusers>{
    return this.http.post<Iusers>(`${this.baseurl}` + `/users/post`,user)
  }

  getuser():Observable<any>{
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json'});
  

    return this.http.get(`${this.baseurl}` + `/users/get`,{'headers':headers})

  }

  getuserbyid(id:number):Observable<any>{

    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json'});
  

    return this.http.get(`${this.baseurl}` + `/users/` + id,{'headers':headers})

  }

   updateuser(user:any){
    // console.log('heeyyy');
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json'});
   this.http.put(`${this.baseurl}` + `/users/` + user.id , user,{responseType:"text"}).subscribe(()=>{
     
    });
   
    
  }

  deleteuser(user:Iusers):Observable<Iusers>{
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json'});
  
    return this.http.delete<Iusers>(`${this.baseurl}` + `/users/` + user.id,{headers:headers})
  }


}
