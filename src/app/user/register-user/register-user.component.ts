import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
constructor(private userservice: UserService){}

  registerform: FormGroup
  ngOnInit(){
    this.registerform= new FormGroup({
      name: new FormControl(),
      password: new FormControl()

    })
  }
  registeruser(){
    console.log(this.registerform.value)
    this.userservice.registerUser(this.registerform.value).subscribe((data)=>{
    console.log(data)

    })
  }
}
