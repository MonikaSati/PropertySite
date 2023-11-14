import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
constructor(private userservice: UserService){}
  loginform: FormGroup
  ngOnInit(){
    this.loginform= new FormGroup({   
      name: new FormControl(),
      password: new FormControl(),
    })
    }
    loginuser(){
      this.userservice.getUser(this.loginform.value)
      
    }
}
