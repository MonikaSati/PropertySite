import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/Models/Property';
import { PropertyService } from 'src/Services/Property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
constructor(private propertyservice: PropertyService, private route: Router){}
propertylist={
  "$Id": 1,
  "$values":[]
}
// Property[] |undefined
primimage
ngOnInit(){
  console.log("fromproduct list")
 this.propertyservice.getPropertylist().subscribe((data)=>{
  this.propertylist.$values= data.$values
console.log(this.propertylist)  //console.log(this.propertylist)

 })
}

onpropclick( id: number){
this.route.navigate(["property-detail/", id] )
  console.log("this image is clicked")
}

}
