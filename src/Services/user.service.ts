import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { user } from "src/Models/user";
@Injectable({
    providedIn:"root"
})
export class UserService{
    constructor(private http: HttpClient){}

logedin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
    getUser(data:user){
  this.http.post<user>("https://localhost:7110/api/Account/login",data).subscribe((data)=>{
if(data){
    let user= data
        localStorage.setItem('User', JSON.stringify(user.token));
        
 return this.logedin.next(true);
  console.log(this.logedin)
}
 })
    }

    registerUser(data: any ){
       return  this.http.post("https://localhost:7110/api/Account/Register", data)
    }
}