import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/Services/Property.service';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private us: UserService, private route: Router){}
login

ngOnInit(){
  this.us.login.subscribe((value)=>{
    this.login= value
  })
  if(localStorage.getItem('User')){
    this.login= true
  }
}
  Logout(){
    localStorage.removeItem("User")
    this.login=false
    this.route.navigate(['Login'])

    
  }

  }

