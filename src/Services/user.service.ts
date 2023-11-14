import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { user } from "src/Models/user";
@Injectable({
    providedIn:"root"
})
export class UserService{
    constructor(private http: HttpClient, private route: Router){}

logedin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
login= new EventEmitter<boolean>(false)
    getUser(data:user){
  this.http.post<user>("https://localhost:7110/api/Account/login",data).subscribe((data)=>{
if(data){
    let user= data
        localStorage.setItem('User', JSON.stringify(user.token));
        this.login.emit(true)
        this.route.navigate([""])
 return this.logedin.next(true);
  
}
 })
    }

    registerUser(data: any ){
       return  this.http.post("https://localhost:7110/api/Account/Register", data)
    }
}