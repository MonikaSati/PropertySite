import { EventEmitter, Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/Services/user.service";
@Injectable({
    providedIn:"root"
})
export class AuthGuard  {
    constructor(private route:Router){}
    canActivate(){
     
  const token= localStorage.getItem('User')
  if(!token){
    this.route.navigate(["Login"])
    return false
  }
  return true
        }
    
}